"use server";

import { BaseDelete, type Pageable } from "@_types/index";
import { AlatKerjaSchema, type AlatKerja, type AlatKerjaMini } from "@_types/master/alat_kerja";
import { setAuthorizeHeader } from "@helpers/index";
import { API_URL } from "@utils/index";
import axios from "axios";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getDataAlatKerja = async (
	searchParams: string,
): Promise<Pageable<AlatKerja> | null> => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);
		const { data, status } = await axios.get(
			`${API_URL}/master/alat-kerja?${searchParams}`,
			{ headers },
		);
		if (status !== 200) throw new Error(data.response.data.message);
		return data.data;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (error: any) {
		console.log(error.response.data.message);
		return null;
	}
};

export const getListAlatKerja = async (
	searchParams?: string,
): Promise<AlatKerjaMini[] | null> => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);
		const { data, status } = await axios.get(
			`${API_URL}/master/alat-kerja/list?${searchParams}`,
			{ headers: headers },
		);

		if (status !== 200) throw new Error(data.response.data.message);

		return data.data;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (e: any) {
		console.log(e.response.data.message);
		return null;
	}
};

export const getAlatKerjaById = async (id: number): Promise<AlatKerja | undefined> => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);
		const { data, status } = await axios.get(`${API_URL}/master/alat-kerja/${id}`, {
			headers: headers,
		});

		if (status !== 200) throw new Error(data.response.data.message);

		return data.data;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (e: any) {
		console.log(e.response.data.message)
	}
};

export const saveAlatKerja = async (_prevState: unknown, formData: FormData) => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);

		const validate = AlatKerjaSchema.safeParse({
			id: Number(formData.get("id")),
			nama: formData.get("nama"),
			profesiId: Number(formData.get("profesiId")),
		});

        console.log(formData)

		if (!validate.success)
			return { error: validate.error.flatten().fieldErrors };

		validate.data.id > 0
			? await axios.put(`${API_URL}/master/alat-kerja/${validate.data.id}`, formData, {
					headers: headers,
				})
			: await axios.post(`${API_URL}/master/alat-kerja`, formData, {
					headers: headers,
				});

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (e: any) {
		console.log(e.response.data);
		return { error: e.response.data };
	}

	revalidateTag("alat_kerja");
	redirect("/master/alat_kerja");
};

export const hapus = async (_prevState: unknown, formData: FormData) => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);

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

		await axios.delete(`${API_URL}/master/alat-kerja/${id}`, { headers: headers });

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (err: any) {
		console.log(err.response.data);
		return {
			success: false,
			error: {
				message: String(err.response?.data.message),
			},
		};
	}

	revalidateTag("alat_kerja");
	redirect("/master/alat_kerja");
};
