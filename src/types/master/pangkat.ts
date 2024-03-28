import { z } from "zod";
import type { CustomColumnDef } from "..";

export const Pangkat = z.object({
	id: z.number(),
	nama: z.string(),
});

export type Pangkat = z.infer<typeof Pangkat>;

export const pangkatTableColumns: CustomColumnDef[] = [
	{ id: "urut", label: "No" },
	{ id: "nama", label: "Nama" },
	{ id: "aksi", label: "Aksi" },
];
