import { z } from "zod";
import { Profesi, ProfesiMini } from "./profesi";
import type { CustomColumnDef } from "..";

export interface AlatKerjaMini {
	id: number;
	nama: string;
}

export interface AlatKerja extends AlatKerjaMini {}

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
