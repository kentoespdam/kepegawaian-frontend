import { z } from "zod";
import { Level } from "./level";
import { CustomColumnDef } from "..";
import { zfd } from "zod-form-data";

export const Grade = z.object({
	id: z.number(),
	level: Level,
	grade: z.number(),
	tukin: z.number(),
});

export type Grade = z.infer<typeof Grade>;

export const GradeForm = z.object({
	id: z.optional(z.number()),
	// levelId: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
	// 	message: "Level is required!",
	// }),
	levelId: z.number().min(1, "Level is required"),
	grade: z.number().min(1, "Min Grade is 1"),
	tukin: z.number().min(50_000, "Min Tukin is 50.000"),
});

export type GradeForm = z.infer<typeof GradeForm>;

export const GradeFormSchema = zfd.formData({
	id: zfd.text(z.optional(z.number())),
	// levelId: zfd.text(
	// 	z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
	// 		message: "Level is required!",
	// 	}),
	// ),
	levelId: zfd.text(z.number().min(1, "Level is required")),
	grade: zfd.text(z.number().min(1, "Min Grade is 1")),
	tukin: zfd.text(z.number().min(50_000, "Min Tukin is 50.000")),
});

export const gradeTableColumns: CustomColumnDef[] = [
	{ id: "urut", label: "No" },
	{ id: "level.name", label: "Level" },
	{ id: "grade", label: "Grade" },
	{ id: "tukin", label: "Tukin" },
];
