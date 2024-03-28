import TableHeadBuilder from "@components/builder/table/head";
import PaginationBuilder from "@components/builder/table/pagination";
import TooltipBuilder from "@components/builder/tooltip";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Table } from "@components/ui/table";
import { golonganTableColumns } from "@tipes/master/golongan";
import { CirclePlusIcon } from "lucide-react";
import Link from "next/link";
import { getDataGolongan } from "./action";
import GolonganTableBody from "./body";
import SearchBuilder from "@components/builder/search";

export const metadata = {
	title: "Master Golongan",
};
const GolonganPage = async ({
	searchParams,
}: { searchParams: Record<string, string> }) => {
	const urlSearchParams = new URLSearchParams(searchParams);
	const data = await getDataGolongan(urlSearchParams.toString());

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-bold text-md flex flex-row justify-between items-center">
					<span>Master Golongan</span>
					<TooltipBuilder text="Add Golongan" className="bg-primary">
						<Link href="/master/golongan/add">
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
				<SearchBuilder columns={golonganTableColumns} />
				<div className="rounder-md border">
					<Table>
						<TableHeadBuilder columns={golonganTableColumns} />
						<GolonganTableBody data={data} />
					</Table>
					<PaginationBuilder data={data} />
				</div>
			</CardContent>
		</Card>
	);
};

export default GolonganPage;
