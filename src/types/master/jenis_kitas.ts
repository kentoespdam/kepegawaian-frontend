import { z } from "zod";
import type { CustomColumnDef } from "..";

export const JenisKitas=z.object({
    id: z.number(),
	nama: z.string(),
})

export type JenisKitas=z.infer<typeof JenisKitas>

export const JenisKitasSchema=z.object({
    id:z.number(),
    nama:z.string({
        required_error:"Nama Jenis Kitas Wajib Diisi"
    })
})

export const jenisKitasTableColumn:CustomColumnDef[]=[
    { id: "urut", label: "No" },
	{
		id: "nama",
		label: "Nama Jenis Kartu",
		search: true,
		searchType: "text",
	},
	{ id: "aksi", label: "Aksi" },
]