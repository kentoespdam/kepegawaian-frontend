import { z } from "zod";
import { CustomColumnDef } from "..";

export const StatusPegawai = z.object({
	id: z.number(),
	nama: z.string(),
});

export type StatusPegawai = z.infer<typeof StatusPegawai>;

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
