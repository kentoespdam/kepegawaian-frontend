import { z } from "zod";

export const USER_ROLE = ["USER", "ADMIN"] as const;
export const UserRole = z.enum(USER_ROLE);
export type UserRole = z.infer<typeof UserRole>;

export interface AxiosErrorData {
	message: string;
	code: number;
	type: string;
	version: string;
}
