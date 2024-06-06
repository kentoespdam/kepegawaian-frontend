import type { Agama } from "@_types/enums/agama";
import type { StatusKawin } from "@_types/enums/status_kawin";
import { z } from "zod";
import type { CustomColumnDef } from "..";
import type { KartuIdentitas } from "./kartu_identitas";
import type { PendidikanTerakhir } from "./pendidikan_terakhir";

export interface BiodataMini {
	nik: string;
	nama: string;
	jenisKelamin: string;
}

export interface Biodata extends BiodataMini {
	tempatLahir: string;
	tanggalLahir: Date;
	alamat: string;
	telp: string;
	agama: Agama;
	ibuKandung: string;
	pendidikanTerakhir: PendidikanTerakhir;
	golonganDarah: string;
	statusKawin: StatusKawin;
	fotoProfil: string;
	notes: string;
	kartuIdentitas: KartuIdentitas;
}

export const BiodataSchema = z.object({
	nik: z.string({ required_error: "NIK harus diisi" }),
	nama: z.string({ required_error: "Nama harus diisi" }),
	jenisKelamin: z.string({ required_error: "Jenis Kelamin harus diisi" }),
	tempatLahir: z.string({ required_error: "Tempat Lahir harus diisi" }),
	tanggalLahir: z.date({ required_error: "Tanggal Lahir harus diisi" }),
	alamat: z.string({ required_error: "Alamat harus diisi" }),
	telp: z.string().optional(),
	agama: z.number(),
	ibuKandung: z.string({ required_error: "Ibu Kandung harus diisi" }),
	pendidikanTerakhir: z.number().min(1, "Pendidikan Terakhir harus diisi"),
	golonganDarah: z.string().optional(),
	statusKawin: z.string(),
	notes: z.string(),
});

export type BiodataSchema = z.infer<typeof BiodataSchema>;

export const biodataTableColumns: CustomColumnDef[] = [
	{
		id: "urut",
		label: "No",
	},
	{
		id: "nik",
		label: "Nik",
		search: true,
		searchType: "text",
	},
	{
		id: "nama",
		label: "Nama",
		search: true,
		searchType: "text",
	},
	{
		id: "jenisKelamin",
		label: "Jenis Kelamin",
	},
	{
		id: "tempatLahir",
		label: "Tempat Lahir",
	},
	{
		id: "tanggalLahir",
		label: "Tanggal Lahir",
	},
	{
		id: "alamat",
		label: "Alamat",
	},
	{
		id: "telp",
		label: "Telp",
	},
	{
		id: "agama",
		label: "Agama",
	},
	{
		id: "ibuKandung",
		label: "Ibu Kandung",
	},
	{
		id: "pendidikanTerakhir",
		label: "Pendidikan Terakhir",
	},
	{
		id: "golonganDarah",
		label: "Golongan Darah",
	},
	{
		id: "statusKawin",
		label: "Status Kawin",
	},
	{
		id: "notes",
		label: "Notes",
	},
];
