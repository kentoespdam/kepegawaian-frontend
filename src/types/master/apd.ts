import { z } from "zod"
import { ProfesiMini } from "./profesi"
import type { CustomColumnDef } from ".."

export const ApdMini = z.object({
    id: z.number(),
    nama: z.string(),
})

export type ApdMini = z.infer<typeof ApdMini>

export const Apd = ApdMini.extend({
    profesi: ProfesiMini
})

export type Apd = z.infer<typeof Apd>

export const ApdForm = z.object({
    id: z.number(),
    nama: z.string({ required_error: "Apd is required" }),
    profesiId: z.number().min(1, "Profesi is required")
})

export const apdTableColumns: CustomColumnDef[] = [
    { id: "urut", label: "No" },
    { id: "profesiId", label: "Profesi", search: true, searchType: "profesi" },
    { id: "nama", label: "Apd", search: true, searchType: "text" },
    { id: "aksi", label: "Aksi" },
]