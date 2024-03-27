import { z } from "zod";
import type { CustomColumnDef } from "..";

export type StatusPegawai = {
	id: number;
	nama: string;
};

export const StatusPegawaiSchema = z.object({
	id: z.number(),
	nama: z.string(),
});

export const statusPegawaiTableColumns: CustomColumnDef[] = [
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
