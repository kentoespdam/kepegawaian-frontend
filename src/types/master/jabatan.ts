import { z } from "zod";
import type { CustomColumnDef } from "..";
import type { Level } from "./level";

export interface JabatanMini {
	id: number;
	level: Level;
	nama: string;
}

export interface Jabatan extends JabatanMini {
	parent: JabatanMini;
}

export const JabatanSchema = z.object({
	id: z.optional(z.number()),
	parentId: z.optional(z.number()),
	organisasiId: z.number(),
	levelId: z.number(),
	nama: z.string(),
});

export const jabatanTableColumns: CustomColumnDef[] = [
	{ id: "urut", label: "No" },
	{ id: "nama", label: "Nama", search: true, searchType: "text" },
	{ id: "parentId", label: "Induk", search: true, searchType: "jabatan" },
	{
		id: "organisasiId",
		label: "Organisasi",
		search: true,
		searchType: "organisasi",
	},
	{ id: "levelId", label: "Level", search: true, searchType: "level" },
	{ id: "aksi", label: "Aksi" },
];
