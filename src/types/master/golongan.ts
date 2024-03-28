import { z } from "zod";
import type { CustomColumnDef } from "..";

export const Golongan = z.object({
	id: z.number(),
	golongan: z.string(),
	pangkat: z.string(),
});

export type Golongan = z.infer<typeof Golongan>;

export const golonganTableColumns: CustomColumnDef[] = [
	{ id: "urut", label: "No" },
	{ id: "golongan", label: "Golongan", search: true, searchType: "text" },
	{ id: "pangkat", label: "Pangkat", search: true, searchType: "text" },
	{ id: "aksi", label: "Aksi" },
];
