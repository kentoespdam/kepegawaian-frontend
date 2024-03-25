import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { getDataGrade } from "./action";
import TooltipBuilder from "@components/builder/tooltip";
import Link from "next/link";
import { Button } from "@components/ui/button";
import TableHeadBuilder from "@components/builder/table/head";
import { gradeTableColumns } from "@tipes/master/grade";
import { CirclePlusIcon } from "lucide-react";
import GradePagination from "./pagination";
import GradeTableBody from "./body";
import { Table } from "@components/ui/table";
import SearchBuilder from "@components/builder/search";

export const metadata = {
	title: "Master Grade",
};
const GradePage = async ({
	searchParams,
}: { searchParams: Record<string, string> }) => {
	const urlSearchParams = new URLSearchParams(searchParams);
	const data = await getDataGrade(urlSearchParams.toString());

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
				<SearchBuilder columns={gradeTableColumns} />
				<div className="rounder-md border">
					<Table>
						<TableHeadBuilder columns={gradeTableColumns} />
						<GradeTableBody data={data} />
					</Table>
					<GradePagination data={data} />
				</div>
			</CardContent>
		</Card>
	);
};

export default GradePage;
