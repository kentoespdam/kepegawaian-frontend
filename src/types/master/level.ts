import type { CustomColumnDef } from "..";

export interface Level {
	id: number;
	nama: string;
}

export const levelTableColumns: CustomColumnDef[] = [
	{
		id: "urut",
		label: "No",
	},
	{
		id: "nama",
		label: "Nama",
		search: true,
		searchType: "text",
	},
	{
		id: "aksi",
		label: "Aksi",
	},
];
