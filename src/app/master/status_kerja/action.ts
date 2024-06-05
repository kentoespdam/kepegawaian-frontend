"use server";

import { setAuthorizeHeader } from "@helpers/index";
import { BaseDelete, type Pageable } from "@_types/index";
import { StatusKerja } from "@_types/master/status_kerja";
import { API_URL } from "@utils/index";
import axios from "axios";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getDataStatusKerja = async (
	searchParams: string,
): Promise<Pageable<StatusKerja>> => {
	const cookieList = cookies();
	const headers = setAuthorizeHeader(cookieList);
	const { data, status } = await axios.get(
		`${API_URL}/master/status-kerja?${searchParams}`,
		{ headers: headers },
	);

	if (status !== 200)
		throw new Error(data.response.data.message)

	return data.data;
};

export const getListStatusKerja = async (
	searchParams?: string,
): Promise<StatusKerja[] | null> => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);
		const { data } = await axios.get(
			`${API_URL}/master/status-kerja/list?${searchParams}`,
			{ headers: headers },
		);

		return data.data;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (error: any) {
		console.log("get status_kerja list", error.response.data);
		return null;
	}
};

export const getStatusKerjaById = async (id: number) => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);
		const { data } = await axios.get(`${API_URL}/master/status-kerja/${id}`, {
			headers: headers,
		});
		return data.data;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (error: any) {
		console.log(error.response.data);
	}
};

export const saveStatusKerja = async (_prevState: unknown, formData: FormData) => {
	const cookieList = cookies();
	const headers = setAuthorizeHeader(cookieList);

	try {
		const validate = StatusKerja.safeParse({
			id: Number(formData.get("id")),
			nama: formData.get("nama"),
		});

		if (!validate.success){
			return { error: validate.error.flatten().fieldErrors };}

		validate.data.id > 0
			? await axios.put(
				`${API_URL}/master/status-kerja/${validate.data.id}`,
				formData,
				{ headers: headers },
			)
			: await axios.post(`${API_URL}/master/status-kerja`, formData, {
				headers: headers,
			});

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (err: any) {
		console.log(err.response.data);
		return { error: err.response.data };
	}

	revalidateTag("status_kerja");
	redirect("/master/status_kerja");
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

		await axios.delete(`${API_URL}/master/status-kerja/${id}`, { headers: headers });

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

	revalidateTag("status_kerja");
	redirect("/master/status_kerja");
};
