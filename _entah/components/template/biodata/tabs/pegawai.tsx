import { pegawaiTableColumns } from "@_types/pegawai";
import TableHeadBuilder from "@components/builder/table/head";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Table } from "@components/ui/table";
import { TabsContent } from "@components/ui/tabs";

const PegawaiTabComponent = () => {
    return (
        <TabsContent value="pegawai">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>
                        <span>Daftar Pegawai</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="min-h-[250px] space-y-2">
                    <Table>
                        <TableHeadBuilder columns={pegawaiTableColumns} />
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>
    );
}

export default PegawaiTabComponent;