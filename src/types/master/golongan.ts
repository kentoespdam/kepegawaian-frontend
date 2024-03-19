import { z } from "zod";
import { CustomColumnDef } from "..";

export const Golongan = z.object({
	id: z.number(),
	golongan: z.string(),
	pangkat: z.string(),
});

export type Golongan = z.infer<typeof Golongan>;

export const golonganTableColumns: CustomColumnDef[] = [
	{ id: "urut", label: "No" },
	{ id: "golongan", label: "Golongan" },
	{ id: "pangkat", label: "Pangkat" },
	{ id: "aksi", label: "Aksi" },
];
