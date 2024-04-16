import SearchBuilder from "@components/builder/search";
import TableHeadBuilder from "@components/builder/table/head";
import PaginationBuilder from "@components/builder/table/pagination";
import TooltipBuilder from "@components/builder/tooltip";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Table } from "@components/ui/table";
import { gradeTableColumns } from "@_types/master/grade";
import { CirclePlusIcon } from "lucide-react";
import Link from "next/link";
import { getListLevel } from "../level/action";
import { getDataGrade } from "./action";
import GradeTableBody from "./body";

export const metadata = {
	title: "Master Grade",
};
const GradePage = async ({
	searchParams,
}: { searchParams: Record<string, string> }) => {
	const urlSearchParams = new URLSearchParams(searchParams);
	const data = await getDataGrade(urlSearchParams.toString());
	const levels = await getListLevel("");

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-bold text-md flex flex-row justify-between items-center">
					<span>Master Grade</span>
					<TooltipBuilder text="Add Grade" className="bg-primary">
						<Link href="/master/grade/add">
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
					columns={gradeTableColumns}
					levels={levels ? levels : undefined}
				/>
				<div className="rounder-md border">
					<Table>
						<TableHeadBuilder columns={gradeTableColumns} />
						<GradeTableBody data={data} />
					</Table>
					<PaginationBuilder data={data} />
				</div>
			</CardContent>
		</Card>
	);
};

export default GradePage;
