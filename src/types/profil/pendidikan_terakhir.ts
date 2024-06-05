import { z } from "zod";

export const PendidikanTerakhir = z.object({
	id: z.number(),
	nama: z.string(),
	seq: z.number(),
});

export type PendidikanTerakhir = z.infer<typeof PendidikanTerakhir>;