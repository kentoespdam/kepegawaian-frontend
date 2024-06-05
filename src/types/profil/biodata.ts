import { Agama } from "@_types/enums/agama";
import { GolonganDarah } from "@_types/enums/golongan_darah";
import { JenisKelamin } from "@_types/enums/jenisKelamin";
import { StatusKawin } from "@_types/enums/status_kawin";
import { z } from "zod";
import { KartuIdentitas } from "./kartu_identitas";
import { PendidikanTerakhir } from "./pendidikan_terakhir";
import type { CustomColumnDef } from "..";

export const BiodataMini = z.object({
	nik: z.string(),
	nama: z.string(),
	jenisKelamin: JenisKelamin,
});

export type BiodataMini = z.infer<typeof BiodataMini>;

export const Biodata = BiodataMini.extend({
	tempatLahir: z.string(),
	tanggalLahir: z.string(),
	alamat: z.string(),
	telp: z.string(),
	agama: Agama,
	ibuKandung: z.string(),
	pendidikanTerakhir: PendidikanTerakhir,
	golonganDarah: GolonganDarah,
	statusKawin: StatusKawin,
	fotoProfil: z.string(),
	notes: z.string(),
	kartuIdentitas: KartuIdentitas,
});

export type Biodata = z.infer<typeof Biodata>;

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
		label: "Tempat Lahir"
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
	}
];
