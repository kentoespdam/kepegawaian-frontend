import SearchBuilder from "@components/builder/search";
import TableHeadBuilder from "@components/builder/table/head";
import PaginationBuilder from "@components/builder/table/pagination";
import TooltipBuilder from "@components/builder/tooltip";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Table } from "@components/ui/table";
import { profesiTableColumns } from "@_types/master/profesi";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import { getListLevel } from "../level/action";
import { getDataProfesi } from "./action";
import ProfesiTableBody from "./body";

export const metadata = {
    title: "Master Profesi"
}
const ProfesiPage = async ({ searchParams }: { searchParams: Record<string, string> }) => {
    const urlSearchParams = new URLSearchParams(searchParams)
    const data = await getDataProfesi(urlSearchParams.toString())
    const levels = await getListLevel()

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-bold text-md flex flex-row justify-between items-center">
                    <span className="font-bold">{metadata.title}</span>
                    <div>
                        <TooltipBuilder text="Add Profesi" className="bg-primary">
                            <Link href="/master/profesi/add">
                                <Button variant="ghost" className="p-0 w-6 h-6 rounded-full text-primary hover:bg-primary hover:text-primary-foreground" >
                                    <CirclePlus />
                                </Button>
                            </Link>
                        </TooltipBuilder>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <SearchBuilder columns={profesiTableColumns} levels={levels ? levels : undefined} />
                <div className="rounded-md border">
                    <Table>
                        <TableHeadBuilder columns={profesiTableColumns} />
                        <ProfesiTableBody data={data} />
                    </Table>
                    <PaginationBuilder data={data} />
                </div>
            </CardContent>
        </Card >
    );
}

export default ProfesiPage;