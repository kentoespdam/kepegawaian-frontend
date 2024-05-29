"use server";
import { BaseDelete, type Pageable } from "@_types/index";
import {
	JenisKeahlianSchema,
	type JenisKeahlian,
} from "@_types/master/jenis_keahlian";
import { setAuthorizeHeader } from "@helpers/index";
import { API_URL } from "@utils/index";
import axios from "axios";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getDataJenisKeahlian = async (
	searchParams: string,
): Promise<Pageable<JenisKeahlian> | null> => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);
		const { data, status } = await axios.get(
			`${API_URL}/master/jenis-keahlian?${searchParams}`,
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

export const getListJenisKeahlian = async (
	searchParams?: string,
): Promise<JenisKeahlian[]> => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);
		const { data, status } = await axios.get(
			`${API_URL}/master/jenis-keahlian/list?${searchParams}`,
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

export const getJenisKeahlianById = async (
	id: number,
): Promise<JenisKeahlian | undefined> => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);
		const { data, status } = await axios.get(
			`${API_URL}/master/jenis-keahlian/${id}`,
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

export const saveJenisKeahlian = async (
	_prevState: unknown,
	formData: FormData,
) => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);

		const validate = JenisKeahlianSchema.safeParse({
			id: Number(formData.get("id")),
			nama: formData.get("nama"),
		});

		if (!validate.success)
			return { error: validate.error.flatten().fieldErrors };

		validate.data.id > 0
			? await axios.put(
					`${API_URL}/master/jenis-keahlian/${validate.data.id}`,
					formData,
					{
						headers: headers,
					},
				)
			: await axios.post(`${API_URL}/master/jenis-keahlian`, formData, {
					headers: headers,
				});

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (e: any) {
		console.log(e.response.dats);
		return { error: e.response.data };
	}

	revalidateTag("jenis_keahlian");
	redirect("/master/jenis_keahlian");
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

		await axios.delete(`${API_URL}/master/jenis-keahlian/${id}`, {
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

	revalidateTag("jenis_keahlian");
	redirect("/master/jenis_keahlian");
};
