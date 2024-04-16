import TableHeadBuilder from "@components/builder/table/head";
import PaginationBuilder from "@components/builder/table/pagination";
import TooltipBuilder from "@components/builder/tooltip";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Table } from "@components/ui/table";
import { statusPegawaiTableColumns } from "@_types/master/status-pegawai";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import { getDataStatusPegawai } from "./action";
import StatusPegawaiTableBody from "./body";
import SearchBuilder from "@components/builder/search";

export const revalidate = 10
const StatusPegawaiPage = async ({ searchParams }: { searchParams: Record<string, string> }) => {
    const urlSearchParams = new URLSearchParams(searchParams)
    const data = await getDataStatusPegawai(urlSearchParams.toString())

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-bold text-md flex flex-row justify-between items-center">
                    <span className="font-bold">Status Pegawai</span>
                    <div>
                        <TooltipBuilder text="Add Status pegawai" className="bg-primary">
                            <Link href="/master/status-pegawai/add">
                                <Button variant="ghost" className="p-0 w-6 h-6 rounded-full text-primary hover:bg-primary hover:text-primary-foreground" >
                                    <CirclePlus />
                                </Button>
                            </Link>
                        </TooltipBuilder>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <SearchBuilder columns={statusPegawaiTableColumns} />
                <div className="rounded-md border">
                    <Table>
                        <TableHeadBuilder columns={statusPegawaiTableColumns} />
                        <StatusPegawaiTableBody data={data} />
                    </Table>
                    <PaginationBuilder data={data} />
                </div>
            </CardContent>
        </Card>
    );
}

export default StatusPegawaiPage;