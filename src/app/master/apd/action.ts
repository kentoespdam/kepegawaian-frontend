"use server";

import { BaseDelete, type Pageable } from "@_types/index";
import { ApdForm, type Apd, type ApdMini } from "@_types/master/apd";
import { setAuthorizeHeader } from "@helpers/index";
import { API_URL } from "@utils/index";
import axios from "axios";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getDataApd = async (
	searchParams: string,
): Promise<Pageable<Apd> | null> => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);
		const { data, status } = await axios.get(
			`${API_URL}/master/apd?${searchParams}`,
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

export const getListApd = async (
	searchParams?: string,
): Promise<ApdMini[] | null> => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);
		const { data, status } = await axios.get(
			`${API_URL}/master/apd/list?${searchParams}`,
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

export const getApdById = async (id: number): Promise<Apd | undefined> => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);
		const { data, status } = await axios.get(`${API_URL}/master/apd/${id}`, {
			headers: headers,
		});

		if (status !== 200) throw new Error(data.response.data.message);

		return data.data;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (e: any) {
		console.log(e.response.data.message)
	}
};

export const saveApd = async (_prevState: unknown, formData: FormData) => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);

		const validate = ApdForm.safeParse({
			id: Number(formData.get("id")),
			nama: formData.get("nama"),
			profesiId: Number(formData.get("profesiId")),
		});

		if (!validate.success)
			return { error: validate.error.flatten().fieldErrors };

		validate.data.id > 0
			? await axios.put(`${API_URL}/master/apd/${validate.data.id}`, formData, {
					headers: headers,
				})
			: await axios.post(`${API_URL}/master/apd`, formData, {
					headers: headers,
				});

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (e: any) {
		console.log(e.response.dats);
		return { error: e.response.data };
	}

	revalidateTag("apd");
	redirect("/master/apd");
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

		await axios.delete(`${API_URL}/master/apd/${id}`, { headers: headers });

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

	revalidateTag("apd");
	redirect("/master/apd");
};
