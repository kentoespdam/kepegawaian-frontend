import { z } from "zod"
import type { CustomColumnDef } from ".."

export interface Organisasi {
    id: number,
    organisasi?: Organisasi,
    levelOrganisasi: number,
    nama: string
}

export const OrganisasiSchema = z.object({
    id: z.optional(z.number()),
    parentId: z.optional(z.number()),
    levelOrganisasi: z.number().min(1, { message: "Level Organisasi is required" }),
    nama: z.string({ required_error: "Nama Organisasi is required" }),
})

export const organisasiTableColumns: CustomColumnDef[] = [
    {
        id: "urut",
        label: "No",
    },
    {
        id: "nama",
        label: "Nama Organisasi",
        search: true,
        searchType: "text"
    },
    {
        id: "parentId",
        label: "Organisasi Induk",
        search: true,
        searchType: "number"
    },
    {
        id: "levelOrganisasi",
        label: "Level Organisasi",
        search: true,
        searchType: "number"
    },
    {
        id: "aksi",
        label: "Aksi",
    }
]