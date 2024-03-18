"use server";

import { setAuthorizeHeader } from "@helpers/index";
import { BaseDelete, Pageable } from "@tipes/index";
import { Level } from "@tipes/master/level";
import { API_URL } from "@utils/index";
import axios from "axios";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getDataLevel = async (
	searchParams: string,
): Promise<Pageable<Level> | null> => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);
		const { data } = await axios.get(
			`${API_URL}/master/level?${searchParams}`,
			{ headers: headers },
		);

		return data.data;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (error: any) {
		console.log(error.response.data);
		return null;
	}
};

export const getLevelById = async (id: number) => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);
		const { data } = await axios.get(`${API_URL}/master/level/${id}`, {
			headers: headers,
		});
		return data.data;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (error: any) {
		console.log(error.response.data);
	}
};

export const saveLevel = async (_prevState: unknown, formData: FormData) => {
	const cookieList = cookies();
	const headers = setAuthorizeHeader(cookieList);

	try {
		const validate = Level.safeParse({
			id: Number(formData.get("id")),
			nama: formData.get("nama"),
		});

		if (!validate.success)
			return {
				status: 500,
				data: validate.error.message,
			};
		validate.data.id > 0
			? await axios.put(
					`${API_URL}/master/level/${validate.data.id}`,
					formData,
					{ headers: headers },
			  )
			: await axios.post(`${API_URL}/master/level`, formData, {
					headers: headers,
			  });

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (err: any) {
		console.log(err.response.data);
		return {
			status: err.response?.status,
			data: err.response?.data,
		};
	}

	revalidateTag("level");
	redirect("/master/level");
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

		await axios.delete(`${API_URL}/master/level/${id}`, { headers: headers });

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

	revalidateTag("level");
	redirect("/master/level");
};
