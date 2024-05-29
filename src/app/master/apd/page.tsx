import { apdTableColumns } from "@_types/master/apd";
import TableHeadBuilder from "@components/builder/table/head";
import TooltipBuilder from "@components/builder/tooltip";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Table } from "@components/ui/table";
import { CirclePlusIcon } from "lucide-react";
import Link from "next/link";
import { getDataApd } from "./action";
import ApdTableBody from "./body";
import PaginationBuilder from "@components/builder/table/pagination";
import { getListProfesi } from "../profesi/action";
import SearchBuilder from "@components/builder/search";

export const metadata = {
    title: "Master APD"
}

const ApdPage = async ({
    searchParams
}: { searchParams: Record<string, string> }) => {
    const urlSearchParams = new URLSearchParams(searchParams)
    const data = await getDataApd(urlSearchParams.toString())
    const profesiList = await getListProfesi()

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-bold text-md flex flex-row justify-between items-center">
                    <span>{metadata.title}</span>
                    <TooltipBuilder text="Add APD" className="bg-primary">
                        <Link href="/master/apd/add">
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
                <SearchBuilder columns={apdTableColumns}
                    profesis={profesiList ?? []}
                />
                <div className="rounded-md border">
                    <Table>
                        <TableHeadBuilder columns={apdTableColumns} />
                        <ApdTableBody data={data} />
                    </Table>
                    <PaginationBuilder data={data} />
                </div>
            </CardContent>
        </Card>
    );
}

export default ApdPage;