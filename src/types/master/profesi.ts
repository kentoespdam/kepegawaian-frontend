import { z } from "zod";
import type { CustomColumnDef } from "..";
import { Level } from "./level";

export const ProfesiMini = z.object({
	id: z.number(),
	nama: z.string(),
});

export type ProfesiMini = z.infer<typeof ProfesiMini>;

export const Profesi = ProfesiMini.extend({
	id: z.number(),
	level: Level,
	detail: z.string(),
	resiko: z.string(),
});

export type Profesi = z.infer<typeof Profesi>;

export const ProfesiSchema = z.object({
	id: z.optional(z.number()),
	levelId: z.number().min(1, "Level is required"),
	nama: z.string({ required_error: "Nama is required" }),
	detail: z.string({ required_error: "Detail is required" }),
	resiko: z.string({ required_error: "Resiko is required" }),
});

export const profesiTableColumns: CustomColumnDef[] = [
	{
		id: "urut",
		label: "No",
	},
	{
		id: "levelId",
		label: "Level",
		search: true,
		searchType: "level",
	},
	{
		id: "nama",
		label: "Nama",
		search: true,
		searchType: "text",
	},
	{
		id: "detail",
		label: "Detail",
	},
	{
		id: "resiko",
		label: "Resiko",
	},
	{
		id: "aksi",
		label: "Aksi",
	},
];

export const findValue = (
	list: ProfesiMini[],
	id: string | number | null,
): ProfesiMini | undefined => list.find((row) => row.id === Number(id));
