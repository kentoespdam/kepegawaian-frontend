import SearchBuilder from "@components/builder/search";
import TableHeadBuilder from "@components/builder/table/head";
import PaginationBuilder from "@components/builder/table/pagination";
import TooltipBuilder from "@components/builder/tooltip";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Table } from "@components/ui/table";
import { jabatanTableColumns } from "@tipes/master/jabatan";
import { CirclePlusIcon } from "lucide-react";
import Link from "next/link";
import { getListLevel } from "../level/action";
import { getListOrganisasi } from "../organisasi/action";
import { getDataJabatan, getListJabatan } from "./action";
import JabatanTableBody from "./body";

export const metadata = {
    title: "Master Jabatan"
}
const JabatanPage = async ({
    searchParams,
}: { searchParams: Record<string, string> }) => {
    const urlSearchParams = new URLSearchParams(searchParams);
    const data = await getDataJabatan(urlSearchParams.toString());
    const levels = await getListLevel()
    const organisasis = await getListOrganisasi()
    const jabatans = await getListJabatan()

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-bold text-md flex flex-row justify-between items-center">
                    <span>Master Jabatan</span>
                    <TooltipBuilder text="Add Jabatan" className="bg-primary">
                        <Link href="/master/jabatan/add">
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
                <SearchBuilder columns={jabatanTableColumns}
                    jabatans={jabatans ?? undefined}
                    levels={levels ?? undefined}
                    organisasis={organisasis ?? undefined} />
                <div className="rounder-md border">
                    <Table>
                        <TableHeadBuilder columns={jabatanTableColumns} />
                        <JabatanTableBody data={data} />
                    </Table>
                    <PaginationBuilder data={data} />
                </div>
            </CardContent>
        </Card>
    );
}

export default JabatanPage;