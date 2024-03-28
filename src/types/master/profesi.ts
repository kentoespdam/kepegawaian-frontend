import { z } from "zod";
import type { CustomColumnDef } from "..";
import type { Level } from "./level";

export interface Profesi {
    id: number;
    level: Level
    nama: string;
}

export const ProfesiSchema = z.object({
    id: z.optional(z.number()),
    levelId: z.number().min(1, "Level is required"),
    nama: z.string({ required_error: "Nama is required" }),
})

export const profesiTableColumns: CustomColumnDef[] = [
    {
        id: "urut",
        label: "No",
    },
    {
        id: "levelId",
        label: "Level",
        search: true,
        searchType: "level"
    },
    {
        id: "nama",
        label: "Nama",
        search: true,
        searchType: "text"
    }, {
        id: "aksi",
        label: "Aksi",
    }
]