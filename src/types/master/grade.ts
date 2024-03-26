import { z } from "zod";
import { Level } from "./level";
import { CustomColumnDef } from "..";

export const Grade = z.object({
	id: z.number(),
	level: Level,
	grade: z.number(),
	tukin: z.number(),
});

export type Grade = z.infer<typeof Grade>;

export const GradeForm = z.object({
	id: z.optional(z.number()),
	levelId: z.number().min(1, "Level is required"),
	grade: z.number().min(1, "Min Grade is 1"),
	tukin: z.number().min(50_000, "Min Tukin is 50.000"),
});

export type GradeForm = z.infer<typeof GradeForm>;

export const gradeTableColumns: CustomColumnDef[] = [
	{ id: "urut", label: "No" },
	{ id: "levelId", label: "Level", search: true, searchType: "level" },
	{ id: "grade", label: "Grade", search: true, searchType: "text" },
	{ id: "tukin", label: "Tukin" },
	{ id: "aksi", label: "Aksi" },
];
