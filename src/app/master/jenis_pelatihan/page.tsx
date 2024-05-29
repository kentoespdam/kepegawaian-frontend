import { jenisPelatihanTableColumn } from "@_types/master/jenis_pelatihan";
import SearchBuilder from "@components/builder/search";
import TableHeadBuilder from "@components/builder/table/head";
import PaginationBuilder from "@components/builder/table/pagination";
import TooltipBuilder from "@components/builder/tooltip";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Table } from "@components/ui/table";
import { CirclePlusIcon } from "lucide-react";
import Link from "next/link";
import { getDataJenisPelatihan } from "./action";
import JenisPelatihanTableBody from "./body";

export const metadata = {
	title: "Master Jenis Pelatihan",
};
const JenisPelatihanPage = async ({
	searchParams,
}: { searchParams: Record<string, string> }) => {
	const urlSearchParams = new URLSearchParams(searchParams);
	const data = await getDataJenisPelatihan(urlSearchParams.toString());

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-bold text-md flex flex-row justify-between items-center">
					<span>{metadata.title}</span>
					<TooltipBuilder
						text="Add Jenis Pelatihan"
						className="bg-primary"
					>
						<Link href="/master/jenis_pelatihan/add">
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
				<SearchBuilder columns={jenisPelatihanTableColumn} />
				<div className="rounded-md border">
					<Table>
						<TableHeadBuilder columns={jenisPelatihanTableColumn} />
						<JenisPelatihanTableBody data={data} />
					</Table>
					<PaginationBuilder data={data} />
				</div>
			</CardContent>
		</Card>
	);
};

export default JenisPelatihanPage;
