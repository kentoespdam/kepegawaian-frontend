import { biodataTableColumns } from "@_types/profil/biodata";
import TableHeadBuilder from "@components/builder/table/head";
import TooltipBuilder from "@components/builder/tooltip";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card";
import { Table } from "@components/ui/table";
import { TabsContent } from "@components/ui/tabs";
import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";

const NonPegawaiTabComponent = () => {
    return (
        <TabsContent value="non-pegawai" className="flex h-full w-full overflow-x-scroll">
            <Card>
                <CardHeader>
                    <CardTitle>
                        <TooltipBuilder text="Tambah Pegawai">
                            <Link href="/kepegawaian/biodata/add">
                                <Button variant="outline" size="sm" className="gap-1">
                                    <PlusCircleIcon className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                        Tambah Biodata
                                    </span>
                                </Button>
                            </Link>
                        </TooltipBuilder>
                    </CardTitle>
                    <CardDescription>
                        Daftar Biodata Non Pegawai
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <Table>
                        <TableHeadBuilder columns={biodataTableColumns} />
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>
    );
}

export default NonPegawaiTabComponent;