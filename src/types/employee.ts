import { z } from "zod";
import { BaseId } from ".";

export const Employee = BaseId.extend({
	id: z.number(),
	nipam: z.string(),
	nama: z.string(),
});

export type Employee = z.infer<typeof Employee>;
