"use server";
import { setAuthorizeHeader } from "@helpers/index";
import { API_URL } from "@utils/index";
import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
import { StatusPegawaiSchema } from "./schema";

export const saveStatusPegawai = async (
	_prevState: unknown,
	formData: FormData,
) => {
	const cookieList = cookies();
	const headers = setAuthorizeHeader(cookieList);
	try {
		const validate = StatusPegawaiSchema.safeParse({
			nama: formData.get("nama"),
		});

		if (!validate.success)
			return {
				status: 500,
				data: validate.error.message,
			};

		const { data, status } = await axios.post(
			`${API_URL}/master/status-pegawai`,
			formData,
			{ headers: headers },
		);
		return {
			status: status,
			data: data,
		};
	} catch (err) {
		const error = err as unknown as AxiosError;
		return {
			status: error.response?.status,
			data: error.response?.data,
		};
	}
};
