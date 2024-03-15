"use server";

import { setAuthorizeHeader } from "@helpers/index";
import { Pageable } from "@tipes/index";
import { StatusPegawai } from "@tipes/master/status-pegawai";
import { API_URL } from "@utils/index";
import axios, { AxiosError } from "axios";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { DeleteSchema, StatusPegawaiSchema } from "./schema";

export const getDataStatusPegawai = async (
	searchParams: string,
): Promise<Pageable<StatusPegawai> | null> => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);
		const { data } = await axios.get(
			`${API_URL}/master/status-pegawai?${searchParams}`,
			{
				headers: headers,
			},
		);

		return data.data;
	} catch (e) {
		const err = e as unknown as AxiosError;
		console.log(err.response);
		return null;
	}
};

export const getStatusPegawaiById = async (id: number) => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);
		const { data } = await axios.get(`${API_URL}/master/status-pegawai/${id}`, {
			headers: headers,
		});
		return data.data;
	} catch (e) {
		const err = e as unknown as AxiosError;
		console.log(err.response);
	}
};

export const saveStatusPegawai = async (
	_prevState: unknown,
	formData: FormData,
) => {
	const cookieList = cookies();
	const headers = setAuthorizeHeader(cookieList);
	try {
		const validate = StatusPegawaiSchema.safeParse({
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
					`${API_URL}/master/status-pegawai/${validate.data.id}`,
					formData,
					{
						headers: headers,
					},
			  )
			: await axios.post(`${API_URL}/master/status-pegawai`, formData, {
					headers: headers,
			  });
	} catch (err) {
		const error = err as unknown as AxiosError;
		return {
			status: error.response?.status,
			data: error.response?.data,
		};
	}

	revalidateTag("status-pegawai");
	redirect("/master/status-pegawai");
};

export const hapus = async (_prevState: unknown, formData: FormData) => {
	const cookieList = cookies();
	const headers = setAuthorizeHeader(cookieList);
	
	try {
		const validate = DeleteSchema.safeParse({
			deleteRef: formData.get("deleteRef"),
		});

		if (!validate.success)
			return {
				success: validate.success,
				error: {
					message: validate.error.message,
				},
			};

		const id = Number(validate.data.deleteRef.substr("DELETE-".length));
		if (id <= 0)
			return {
				success: false,
				error: { message: "invalid data" },
			};

		await axios.delete(`${API_URL}/master/status-pegawai/${id}`, {
			headers: headers,
		});
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (err: any) {
		console.log(err.response?.data);
		return {
			success: false,
			error: {
				message: String(err.response?.data?.message),
			},
		};
	}

	revalidateTag("status-pegawai");
	redirect("/master/status-pegawai");
};