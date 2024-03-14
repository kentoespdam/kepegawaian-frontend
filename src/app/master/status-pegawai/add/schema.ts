import { z } from "zod";

export const StatusPegawaiSchema = z.object({
	nama: z.string().min(1, "Nama harus diisi"),
});

export type StatusPegawaiSchema = z.infer<typeof StatusPegawaiSchema>;
