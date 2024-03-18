import TableHeadBuilder from "@components/builder/table/head";
import TooltipBuilder from "@components/builder/tooltip";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Table } from "@components/ui/table";
import { levelTableColumns } from "@tipes/master/level";
import { CirclePlusIcon } from "lucide-react";
import Link from "next/link";
import { getDataLevel } from "./action";
import LevelTableBody from "./tableBody";

const MasterLevelPage = async ({
	searchParams,
}: { searchParams: Record<string, string> }) => {
	const urlSearchParams = new URLSearchParams(searchParams);
	const data = await getDataLevel(urlSearchParams.toString());

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-bold text-md flex flex-row justify-between items-center">
					<span>Master Level</span>
					<TooltipBuilder text="Add Level" className="bg-primary">
						<Link href="/master/level/add">
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
				<div className="rounder-md border">
					<Table>
						<TableHeadBuilder columns={levelTableColumns} />
						<LevelTableBody data={data} />
					</Table>
				</div>
			</CardContent>
		</Card>
	);
};

export default MasterLevelPage;
