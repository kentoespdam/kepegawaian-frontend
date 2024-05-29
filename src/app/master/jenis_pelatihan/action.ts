"use server";
import { BaseDelete, type Pageable } from "@_types/index";
import { JenisPelatihanSchema, type JenisPelatihan } from "@_types/master/jenis_pelatihan";
import { setAuthorizeHeader } from "@helpers/index";
import { API_URL } from "@utils/index";
import axios from "axios";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getDataJenisPelatihan = async (
	searchParams: string,
): Promise<Pageable<JenisPelatihan> | null> => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);
		const { data, status } = await axios.get(
			`${API_URL}/master/jenis-pelatihan?${searchParams}`,
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

export const getListJenisPelatihan = async (
	searchParams?: string,
): Promise<JenisPelatihan[]> => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);
		const { data, status } = await axios.get(
			`${API_URL}/master/jenis-pelatihan/list?${searchParams}`,
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

export const getJenisPelatihanById = async (
	id: number,
): Promise<JenisPelatihan | undefined> => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);
		const { data, status } = await axios.get(
			`${API_URL}/master/jenis-pelatihan/${id}`,
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

export const saveJenisPelatihan = async (
	_prevState: unknown,
	formData: FormData,
) => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);

		const validate = JenisPelatihanSchema.safeParse({
			id: Number(formData.get("id")),
			nama: formData.get("nama"),
		});

		if (!validate.success)
			return { error: validate.error.flatten().fieldErrors };

		validate.data.id > 0
			? await axios.put(
					`${API_URL}/master/jenis-pelatihan/${validate.data.id}`,
					formData,
					{
						headers: headers,
					},
				)
			: await axios.post(`${API_URL}/master/jenis-pelatihan`, formData, {
					headers: headers,
				});

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (e: any) {
		console.log(e.response.dats);
		return { error: e.response.data };
	}

	revalidateTag("jenis_pelatihan");
	redirect("/master/jenis_pelatihan");
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

		await axios.delete(`${API_URL}/master/jenis-pelatihan/${id}`, {
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

	revalidateTag("jenis_pelatihan");
	redirect("/master/jenis_pelatihan");
};
