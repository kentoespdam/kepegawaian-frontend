import { z } from "zod";
import type { CustomColumnDef } from "..";

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
		search: true,
		searchType: "text"
	},
	{
		id: "aksi",
		label: "Aksi",
	},
];
