import { z } from "zod";

export const StatusPegawaiSchema = z.object({
	id: z.number(),
	nama: z.string().min(1, "Nama harus diisi"),
});

export type StatusPegawaiSchema = z.infer<typeof StatusPegawaiSchema>;

const StatusPegawaiPrevState = z.object({
	status: z.number(),
	data: z.string(),
});

export type StatusPegawaiPrevState = z.infer<typeof StatusPegawaiPrevState>;

export const DeleteSchema = z.object({
	deleteRef: z.string().startsWith("DELETE-", {
		message: "Input kode tidak sesuai!",
	}),
});
export type DeleteSchema = z.infer<typeof DeleteSchema>;
