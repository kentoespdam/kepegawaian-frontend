"use server"

import { setAuthorizeHeader } from "@helpers/index";
import { BaseDelete, type Pageable } from "@tipes/index";
import { JabatanSchema, type Jabatan } from "@tipes/master/jabatan";
import { API_URL } from "@utils/index";
import axios from "axios";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getDataJabatan = async (
    searchParams: string,
): Promise<Pageable<Jabatan>> => {
    const cookieList = cookies();
    const headers = setAuthorizeHeader(cookieList);
    const { data, status } = await axios.get(
        `${API_URL}/master/jabatan?${searchParams}`,
        { headers: headers },
    );

    if (status !== 200)
        throw new Error(data.response.data.message)

    return data.data;
};

export const getListJabatan = async (
    searchParams?: string,
): Promise<Jabatan[] | null> => {
    try {
        const cookieList = cookies();
        const headers = setAuthorizeHeader(cookieList);
        const { data } = await axios.get(
            `${API_URL}/master/jabatan/list?${searchParams}`,
            { headers: headers },
        );

        return data.data;
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
        console.log("get jabatan list", error.response.data);
        return null;
    }
};

export const getJabatanById = async (id: number) => {
    try {
        const cookieList = cookies();
        const headers = setAuthorizeHeader(cookieList);
        const { data } = await axios.get(`${API_URL}/master/jabatan/${id}`, {
            headers: headers,
        });
        return data.data;
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
        console.log(error.response.data);
    }
};

export const saveJabatan = async (_prevState: unknown, formData: FormData) => {
    const cookieList = cookies();
    const headers = setAuthorizeHeader(cookieList);

    try {
        const validate = JabatanSchema.safeParse({
            id: Number(formData.get("id")),
            parentId: Number(formData.get("parentId")),
            organisasiId: Number(formData.get("organisasiId")),
            levelId: Number(formData.get("levelId")),
            nama: formData.get("nama")
        });

        if (!validate.success)
            return { error: validate.error.flatten().fieldErrors };

        validate.data.id
            ? await axios.put(
                `${API_URL}/master/jabatan/${validate.data.id}`,
                formData,
                { headers: headers },
            )
            : await axios.post(`${API_URL}/master/jabatan`, formData, {
                headers: headers,
            });

        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (err: any) {
        console.log(err.response.data);
        return { error: err.response.data };
    }

    revalidateTag("jabatan");
    redirect("/master/jabatan");
};

export const hapus = async (_prevState: unknown, formData: FormData) => {
    const cookieList = cookies();
    const headers = setAuthorizeHeader(cookieList);

    try {
        const validate = BaseDelete.safeParse({
            id: formData.get("deleteRef"),
        });

        if (!validate.success)
            return {
                success: validate.success,
                error: {
                    message: validate.error.message,
                },
            };

        const id = Number(validate.data.id.substring("DELETE-".length));
        if (id <= 0)
            return {
                success: false,
                error: { message: "invalid data" },
            };

        await axios.delete(`${API_URL}/master/jabatan/${id}`, { headers: headers });

        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (err: any) {
        console.log(err.response?.data);
        return {
            success: false,
            error: {
                message: String(err.response?.data.message),
            },
        };
    }

    revalidateTag("jabatan");
    redirect("/master/jabatan");
};