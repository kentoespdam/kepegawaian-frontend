import ButtonDeleteBuilder from "@components/builder/button/delete";
import ButtonEditBuilder from "@components/builder/button/edit";
import { TableBody, TableCell, TableRow } from "@components/ui/table";
import type { Pageable } from "@_types/index";
import { profesiTableColumns, type Profesi } from "@_types/master/profesi";
import { hapus } from "./action";

type ProfesiTableBodyProps = {
    data: Pageable<Profesi>
}
const ProfesiTableBody = ({ data }: ProfesiTableBodyProps) => {
    let urut = data.first ? 1 : Math.ceil(data.totalPages / data.number) + 1;

    return (
        <TableBody>
            {data.empty ? (
                <TableRow>
                    <TableCell
                        colSpan={profesiTableColumns.length}
                        className="text-center">
                        Data Not Found!
                    </TableCell>
                </TableRow>
            ) : (
                data.content.map((profesi) => (
                    <TableRow key={profesi.id}>
                        <TableCell width={60} align="right">{urut++}</TableCell>
                        <TableCell>{profesi.level.nama}</TableCell>
                        <TableCell>{profesi.nama}</TableCell>
                        <TableCell align="center">
                            <ButtonDeleteBuilder
                                id={profesi.id}
                                href={`/master/profesi/delete/${profesi.id}`}
                                msg="Delete Status Pegawai"
                                action={hapus}
                            />
                            <ButtonEditBuilder
                                href={`/master/profesi/edit/${profesi.id}`}
                                msg="Edit Status Pegawai"
                            />
                        </TableCell>
                    </TableRow>
                ))
            )}
        </TableBody>
    );
}

export default ProfesiTableBody;