import { z } from "zod";
import type { CustomColumnDef } from "..";

export const JenjangPendidikan = z.object({
	id: z.number(),
	nama: z.string(),
	seq: z.number(),
});

export type JenjangPendidikan = z.infer<typeof JenjangPendidikan>;

export const JenjangPendidikanSchema = z.object({
	id: z.number(),
	nama: z.string({
		required_error: "Nama Jenis Kitas Wajib Diisi",
	}),
	seq: z.number().min(1, "Urut Wajib Diisi"),
});

export const jenjangPendidikanTableColumn: CustomColumnDef[] = [
	{ id: "urut", label: "No" },
	{
		id: "nama",
		label: "Nama Jenjang Pendidikan",
		search: true,
		searchType: "text",
	},
	{ id: "seq", label: "Urut" },
	{ id: "aksi", label: "Aksi" },
];
