import { z } from "zod";

export const USER_ROLE = { USER: "USER", ADMIN: "ADMIN" } as const;
export const UserRole = z.nativeEnum(USER_ROLE);
export type UserRole = z.infer<typeof UserRole>;

export interface AxiosErrorData {
  message: string;
  code: number;
  type: string;
  version: string;
}

export const BaseId = z.object({
  id: z.number(),
});
