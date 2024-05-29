import { z } from "zod";
import { Profesi } from "./profesi";
import type { CustomColumnDef } from "..";

export const AlatKerjaMini = z.object({
	id: z.number(),
	nama: z.string(),
});

export type AlatKerjaMini = z.infer<typeof AlatKerjaMini>;

export const AlatKerja = AlatKerjaMini.extend({
	profesi: Profesi,
});

export type AlatKerja = z.infer<typeof AlatKerja>;

export const AlatKerjaSchema = z.object({
	id: z.number(),
	nama: z.string({ required_error: "Nama Alat Kerja harus diisi" }),
	profesiId: z.number().min(1, "Profesi harus dipilih"),
});

export type AlatKerjaSchema = z.infer<typeof AlatKerjaSchema>;

export const alatKerjaTableColumns: CustomColumnDef[] = [
	{ id: "urut", label: "No" },
	{ id: "profesiId", label: "Profesi", search: true, searchType: "profesi" },
	{ id: "nama", label: "Nama Alat Kerja", search: true, searchType: "text" },
	{ id: "aksi", label: "Aksi" },
];
