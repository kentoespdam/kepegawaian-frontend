import { pegawaiTableColumns } from "@_types/pegawai";
import SearchBuilder from "@components/builder/search";
import TableHeadBuilder from "@components/builder/table/head";
import { Table, TableBody, TableCell, TableRow } from "@components/ui/table";
import { TabsContent } from "@components/ui/tabs";

const PegawaiTable = () => {
    return (
        <TabsContent value="pegawai">
            <SearchBuilder columns={pegawaiTableColumns} />
            <Table className="border w-full">
                <TableHeadBuilder columns={pegawaiTableColumns} />
                <TableBody>
                    <TableRow>
                        <TableCell colSpan={pegawaiTableColumns.length}>Data Tidak ditemukan</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TabsContent>
    );
}

export default PegawaiTable;