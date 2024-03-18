import { z } from "zod";
import { CustomColumnDef } from "..";

export const Level = z.object({
	id: z.number(),
	nama: z.string(),
});

export type Level = z.infer<typeof Level>;

export const levelTableColumns: CustomColumnDef[] = [
	{
		id: "urut",
		label: "No",
	},
	{
		id: "nama",
		label: "Nama",
	},
	{
		id: "aksi",
		label: "Aksi",
	},
];
