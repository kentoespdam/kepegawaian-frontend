"use server";
import type { Pageable } from "@_types/index";
import { BiodataSchema, type Biodata } from "@_types/profil/biodata";
import { setAuthorizeHeader } from "@helpers/index";
import { API_URL } from "@utils/index";
import axios from "axios";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getBiodataPage = async (
	searchParams: string,
): Promise<Pageable<Biodata>> => {
	try {
		const cookieList = cookies();
		const headers = setAuthorizeHeader(cookieList);
		const { data } = await axios.get(
			`${API_URL}/profil/biodata?${searchParams}`,
			{ headers },
		);
		return data.data;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (e: any) {
		console.log("getBiodataPage", new Date().toISOString(), e.response.data);
		throw new Error(e.response.data.message);
	}
};

const doSaveBiodata = async (formData: FormData) => {
	const cookieList = cookies();
	const headers = setAuthorizeHeader(cookieList);
	return await axios.post(`${API_URL}/profil/biodata`, formData, {
		headers: headers,
	});
};

export const saveBiodata = async (_prevState: unknown, formData: FormData) => {
	try {
		const validate = BiodataSchema.safeParse({
			nik: formData.get("nik"),
			nama: formData.get("nama"),
			jenisKelamin: formData.get("jenisKelamin"),
			tempatLahir: formData.get("tempatLahir"),
			tanggalLahir: formData.get("tanggalLahir"),
			alamat: formData.get("alamat"),
			telp: formData.get("telp"),
			agama: Number(formData.get("agama")),
			ibuKandung: formData.get("ibuKandung"),
			pendidikanTerakhir: Number(formData.get("pendidikanTerakhir")),
			golonganDarah: formData.get("golonganDarah"),
			statusKawin: formData.get("statusKawin"),
			notes: formData.get("notes"),
		});

		if (!validate.success)
			return { error: validate.error.flatten().fieldErrors };

		if (formData.get("referensiProfil") === "biodata") {
			await doSaveBiodata(formData);

			revalidateTag("data_pegawai");
			redirect("/kepegawaian/data_pegawai");
		}

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (error: any) {
		console.log(error.response.data.message);
		return { error: { message: error.response.data.message } };
	}
};
