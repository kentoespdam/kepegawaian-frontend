import type { Pageable } from "@_types/index";
import { apdTableColumns, type Apd } from "@_types/master/apd";
import ButtonDeleteBuilder from "@components/builder/button/delete";
import ButtonEditBuilder from "@components/builder/button/edit";
import { TableBody, TableCell, TableRow } from "@components/ui/table";
import { getUrut } from "@helpers/urut_table";
import { hapus } from "./action";

const ApdTableBody = ({ data }: { data: Pageable<Apd> | null }) => {
    if (!data || data.empty)
        return (
            <TableBody>
                <TableRow>
                    <TableCell
                        colSpan={apdTableColumns.length}
                        className="text-center"
                    >
                        Data Not Found!
                    </TableCell>
                </TableRow>
            </TableBody>)

    let urut = getUrut(data)
    return (
        <TableBody>
            {data.content.map((row) => (
                <TableRow key={row.id}>
                    <TableCell align="right" width={60}>{urut++}</TableCell>
                    <TableCell>{row.profesi.nama}</TableCell>
                    <TableCell>{row.nama}</TableCell>
                    <TableCell align="center">
                        <ButtonDeleteBuilder
                            id={row.id}
                            href={`/master/apd/delete/${row.id}`}
                            msg="Delete APD"
                            action={hapus}
                        />
                        <ButtonEditBuilder
                            href={`/master/apd/edit/${row.id}`}
                            msg="Edit APD"
                        />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
}

export default ApdTableBody;