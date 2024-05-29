"use server";

import { setAuthorizeHeader } from "@helpers/index";
import { BaseDelete, type Pageable } from "@_types/index";
import {
    ProfesiSchema,
	type Profesi,
	type ProfesiMini,
} from "@_types/master/profesi";
import { API_URL } from "@utils/index";
import axios from "axios";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getDataProfesi = async (
	searchParams: string,
): Promise<Pageable<Profesi>> => {
	const cookieList = cookies();
	const headers = setAuthorizeHeader(cookieList);
	const { data, status } = await axios.get(
		`${API_URL}/master/profesi?${searchParams}`,
		{ headers: headers },
	);

	if (status !== 200) throw new Error(data.response.data.message);

	return data.data;
};

export const getListProfesi = async (
	searchParams?: string,
): Promise<ProfesiMini[]> => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);
		const { data } = await axios.get(
			`${API_URL}/master/profesi/list?${searchParams}`,
			{ headers: headers },
		);

		return data.data;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (error: any) {
		console.log("get profesi list", error.response.data);
		return [];
	}
};

export const getProfesiById = async (id: number) => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);
		const { data } = await axios.get(`${API_URL}/master/profesi/${id}`, {
			headers: headers,
		});
		return data.data;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (error: any) {
		console.log(error.response.data);
	}
};

export const saveProfesi = async (_prevState: unknown, formData: FormData) => {
	const cookieList = cookies();
	const headers = setAuthorizeHeader(cookieList);

	try {
		const validate = ProfesiSchema.safeParse({
			id: Number(formData.get("id")),
			levelId: Number(formData.get("levelId")),
			nama: formData.get("nama"),
		});

		if (!validate.success)
			return { error: validate.error.flatten().fieldErrors };

		validate.data.id
			? await axios.put(
					`${API_URL}/master/profesi/${validate.data.id}`,
					formData,
					{ headers: headers },
				)
			: await axios.post(`${API_URL}/master/profesi`, formData, {
					headers: headers,
				});

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (err: any) {
		console.log(err.response.data);
		return { error: err.response.data };
	}

	revalidateTag("profesi");
	redirect("/master/profesi");
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

		await axios.delete(`${API_URL}/master/profesi/${id}`, { headers: headers });

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

	revalidateTag("profesi");
	redirect("/master/profesi");
};
