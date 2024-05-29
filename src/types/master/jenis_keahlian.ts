import { z } from "zod";
import type { CustomColumnDef } from "..";

export const JenisKeahlian = z.object({
	id: z.number(),
	nama: z.string(),
});

export type JenisKeahlian = z.infer<typeof JenisKeahlian>;

export const JenisKeahlianSchema = z.object({
	id: z.number(),
	nama: z.string({ required_error: "Nama Jenis Keahlian wajib diisi" }),
});

export const jenisKeahlianTableColumn: CustomColumnDef[] = [
	{ id: "urut", label: "No" },
	{
		id: "nama",
		label: "Nama Jenis Keahlian",
		search: true,
		searchType: "text",
	},
	{ id: "aksi", label: "Aksi" },
];
