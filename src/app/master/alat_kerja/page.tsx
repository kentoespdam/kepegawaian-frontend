import { alatKerjaTableColumns } from "@_types/master/alat_kerja";
import SearchBuilder from "@components/builder/search";
import TableHeadBuilder from "@components/builder/table/head";
import PaginationBuilder from "@components/builder/table/pagination";
import TooltipBuilder from "@components/builder/tooltip";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Table } from "@components/ui/table";
import { CirclePlusIcon } from "lucide-react";
import Link from "next/link";
import { getListProfesi } from "../profesi/action";
import { getDataAlatKerja } from "./action";
import AlatKerjaTableBody from "./body";

export const metadata = {
	title: "Master Alat Kerja",
};
const AlatKerjaPage = async ({
	searchParams,
}: { searchParams: Record<string, string> }) => {
	const urlSearchParams = new URLSearchParams(searchParams);
	const data = await getDataAlatKerja(urlSearchParams.toString());
	const profesiList = await getListProfesi();

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-bold text-md flex flex-row justify-between items-center">
					<span>{metadata.title}</span>
					<TooltipBuilder text="Add Alat Kerja" className="bg-primary">
						<Link href="/master/alat_kerja/add">
							<Button
								variant="ghost"
								className="p-0 w-6 h-6 rounded-full text-primary hover:bg-primary hover:text-primary-foreground"
							>
								<CirclePlusIcon />
							</Button>
						</Link>
					</TooltipBuilder>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<SearchBuilder
					columns={alatKerjaTableColumns}
					profesis={profesiList ?? []}
				/>
				<div className="rounded-md border">
					<Table>
						<TableHeadBuilder columns={alatKerjaTableColumns} />
						<AlatKerjaTableBody data={data} />
					</Table>
					<PaginationBuilder data={data} />
				</div>
			</CardContent>
		</Card>
	);
};

export default AlatKerjaPage;
