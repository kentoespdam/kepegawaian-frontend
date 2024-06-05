import type { CustomColumnDef } from "..";

export interface StatusKerja {
	id: number;
	nama: string;
}

export const statusKerjaTableColumns: CustomColumnDef[] = [
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
