"use server";

import type { Pageable } from "@_types/index";
import type { Pegawai } from "@_types/pegawai";
import { BiodataSchema } from "@_types/profil/biodata";
import { setAuthorizeHeader } from "@helpers/index";
import { API_URL } from "@utils/index";
import axios from "axios";
import { cookies } from "next/headers";

export const getDataPegawai = async (
	searchParams: string,
): Promise<Pageable<Pegawai> | null> => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);
		const { data, status } = await axios.get(
			`${API_URL}/pegawai?${searchParams}`,
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

export const saveBiodata = (_prevState: unknown, formData: FormData) => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);

		const validate = BiodataSchema.safeParse({
			nik: formData.get("nik"),
			nama: formData.get("nama"),
			jenisKelamin: formData.get("jenisKelamin"),
			tempatLahir: formData.get("tempatLahir"),
			tanggalLahir: formData.get("tanggalLahir"),
			alamat: formData.get("alamat"),
			telp: formData.get("telp"),
			agama: formData.get("agama"),
			ibuKandung: formData.get("ibuKandung"),
			pendidikanTerakhir: formData.get("pendidikanTerakhir"),
			golonganDarah: formData.get("golonganDarah"),
			statusKawin: formData.get("statusKawin"),
			notes: formData.get("notes"),
		});

		if (!validate.success)
			return { error: validate.error.flatten().fieldErrors };

		console.log(formData);
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (error: any) {
		console.log(error.response.data.message);
		return null;
	}
};
