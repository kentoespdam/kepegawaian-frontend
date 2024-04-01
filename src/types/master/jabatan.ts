import { z } from "zod";
import type { Level } from "./level";
import type { Organisasi } from "./organisasi";
import type { CustomColumnDef } from "..";

export interface Jabatan {
    id: number,
    jabatan: Jabatan | null,
    organisasi: Organisasi,
    level: Level,
    nama: string
}

export const JabatanSchema = z.object({
    id: z.optional(z.number()),
    parentId: z.optional(z.number()),
    organisasiId: z.number(),
    levelId: z.number(),
    nama: z.string()
})

export const jabatanTableColumns: CustomColumnDef[] = [
    { id: "urut", label: "No" },
    { id: "nama", label: "Nama", search: true, searchType: "text" },
    { id: "parentId", label: "Induk", search: true, searchType: "jabatan" },
    { id: "organisasiId", label: "Organisasi", search: true, searchType: "organisasi" },
    { id: "levelId", label: "Level", search: true, searchType: "level" },
    { id: "aksi", label: "Aksi" },
]