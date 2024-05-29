import { jenjangPendidikanTableColumn } from "@_types/master/jenjang_pendidikan";
import SearchBuilder from "@components/builder/search";
import TableHeadBuilder from "@components/builder/table/head";
import PaginationBuilder from "@components/builder/table/pagination";
import TooltipBuilder from "@components/builder/tooltip";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Table } from "@components/ui/table";
import { CirclePlusIcon } from "lucide-react";
import Link from "next/link";
import { getDataJenjangPendidikan } from "./action";
import JenjangPendidikanTableBody from "./body";

export const metadata = {
	title: "Master Jenjang Pendidikan",
};
const JenjangPendidikanPage = async ({
	searchParams,
}: { searchParams: Record<string, string> }) => {
	const urlSearchParams = new URLSearchParams(searchParams);
	const data = await getDataJenjangPendidikan(urlSearchParams.toString());

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-bold text-md flex flex-row justify-between items-center">
					<span>{metadata.title}</span>
					<TooltipBuilder text="Add Jenjang Pendidikan" className="bg-primary">
						<Link href="/master/jenjang_pendidikan/add">
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
				<SearchBuilder columns={jenjangPendidikanTableColumn} />
				<div className="rounded-md border">
					<Table>
						<TableHeadBuilder columns={jenjangPendidikanTableColumn} />
						<JenjangPendidikanTableBody data={data} />
					</Table>
					<PaginationBuilder data={data} />
				</div>
			</CardContent>
		</Card>
	);
};

export default JenjangPendidikanPage;
