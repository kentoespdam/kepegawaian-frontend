import { z } from "zod";
import type { CustomColumnDef } from "..";

export const JenisPelatihan=z.object({
    id: z.number(),
	nama: z.string(),
})

export type JenisPelatihan=z.infer<typeof JenisPelatihan>

export const JenisPelatihanSchema=z.object({
    id:z.number(),
    nama:z.string({
        required_error:"Nama Jenis Kitas Wajib Diisi"
    })
})

export const jenisPelatihanTableColumn:CustomColumnDef[]=[
    { id: "urut", label: "No" },
	{
		id: "nama",
		label: "Nama Jenis Pelatihan",
		search: true,
		searchType: "text",
	},
	{ id: "aksi", label: "Aksi" },
]