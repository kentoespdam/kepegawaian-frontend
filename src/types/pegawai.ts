import { z } from "zod";
import { BaseId, type CustomColumnDef } from ".";
import { BiodataMini } from "./profil/biodata";
import { StatusPegawai } from "./master/status_pegawai";
import { Jabatan } from "./master/jabatan";
import { Organisasi } from "./master/organisasi";
import { Profesi } from "./master/profesi";
import { Golongan } from "./master/golongan";
import { Grade } from "./master/grade";
import { StatusKerja } from "./master/status_kerja";

export const Pegawai = BaseId.extend({
	id: z.number(),
	nipam: z.string(),
	biodata: BiodataMini,
	statusPegawai: StatusPegawai,
	jabatan: Jabatan,
	organisasi: Organisasi,
	profesi: Profesi,
	golongan: Golongan,
	grade: Grade,
	statusKerja: StatusKerja,
	notes: z.string().nullable(),
});

export type Pegawai = z.infer<typeof Pegawai>;

export const pegawaiTableColumns: CustomColumnDef[] = [
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
		label: "J/K",
	},
	{
		id: "golonganId",
		label: "Gol.",
	},
	{
		id: "jabatanId",
		label: "Jabatan",
	},
	{
		id: "tglLahir",
		label: "Tgl Lahir",
	},
	// {
	// 	id: "tmtPensiun",
	// 	label: "TMT Pensiun",
	// },
	{
		id: "statusKawin",
		label: "Perkawinan",
	},
	{
		id: "kdPajak",
		label: "Kd. Pajak",
	},
	{
		id: "bpjs",
		label: "BPJS?",
	},
	{
		id: "statusPegawaiId",
		label: "Status Pegawai",
	},
	{
		id: "aksi",
		label: "Aksi",
	},
];