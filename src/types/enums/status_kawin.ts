import { z } from "zod";

export const StatusKawin = z.enum([
	"BELUM_KAWIN",
	"KAWIN",
	"CERAI_HIDUP",
	"CERAI_MATI",
]);
