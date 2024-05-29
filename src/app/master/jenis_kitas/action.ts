"use server";
import { BaseDelete, type Pageable } from "@_types/index";
import { JenisKitasSchema, type JenisKitas } from "@_types/master/jenis_kitas";
import { setAuthorizeHeader } from "@helpers/index";
import { API_URL } from "@utils/index";
import axios from "axios";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getDataJenisKitas = async (
	searchParams: string,
): Promise<Pageable<JenisKitas> | null> => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);
		const { data, status } = await axios.get(
			`${API_URL}/master/jenis-kitas?${searchParams}`,
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

export const getListJenisKitas = async (
	searchParams?: string,
): Promise<JenisKitas[]> => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);
		const { data, status } = await axios.get(
			`${API_URL}/master/jenis-kitas/list?${searchParams}`,
			{ headers: headers },
		);

		if (status !== 200) throw new Error(data.response.data.message);

		return data.data;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (e: any) {
		console.log(e.response.data.message);
		return [];
	}
};

export const getJenisKitasById = async (
	id: number,
): Promise<JenisKitas | undefined> => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);
		const { data, status } = await axios.get(
			`${API_URL}/master/jenis-kitas/${id}`,
			{
				headers: headers,
			},
		);

		if (status !== 200) throw new Error(data.response.data.message);

		return data.data;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (e: any) {
		console.log(e.response.data.message);
	}
};

export const saveJenisKitas = async (
	_prevState: unknown,
	formData: FormData,
) => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);

		const validate = JenisKitasSchema.safeParse({
			id: Number(formData.get("id")),
			nama: formData.get("nama"),
		});

		if (!validate.success)
			return { error: validate.error.flatten().fieldErrors };

		validate.data.id > 0
			? await axios.put(
					`${API_URL}/master/jenis-kitas/${validate.data.id}`,
					formData,
					{
						headers: headers,
					},
				)
			: await axios.post(`${API_URL}/master/jenis-kitas`, formData, {
					headers: headers,
				});

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (e: any) {
		console.log(e.response.dats);
		return { error: e.response.data };
	}

	revalidateTag("jenis_kitas");
	redirect("/master/jenis_kitas");
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

		await axios.delete(`${API_URL}/master/jenis-kitas/${id}`, {
			headers: headers,
		});

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

	revalidateTag("jenis_kitas");
	redirect("/master/jenis_kitas");
};
