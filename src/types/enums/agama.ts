import { z } from "zod";

export const Agama = z.enum([
	"TIDAK_TAHU",
	"ISLAM",
	"KRISTEN",
	"KATOLIK",
	"HINDU",
	"BUDHA",
	"LAINNYA",
]);

export type Agama = z.infer<typeof Agama>;
