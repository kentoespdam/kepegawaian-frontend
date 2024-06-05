import { JenisKitas } from "@_types/master/jenis_kitas";
import { z } from "zod";

export const KartuIdentitas = z.object({
	id: z.number(),
	jenisKartu: JenisKitas,
	nomorKartu: z.string(),
});

export type KartuIdentitas = z.infer<typeof KartuIdentitas>;
