import ButtonDeleteBuilder from "@components/builder/button/delete";
import ButtonEditBuilder from "@components/builder/button/edit";
import { TableBody, TableCell, TableRow } from "@components/ui/table";
import type { Pageable } from "@_types/index";
import { type StatusPegawai, statusPegawaiTableColumns } from "@_types/master/status_pegawai";
import { hapus } from "./action";

type StatusPegawaiTableBodyProps = {
    data: Pageable<StatusPegawai>;
};
const StatusPegawaiTableBody = ({ data }: StatusPegawaiTableBodyProps) => {
    let urut = data.first ? 1 : Math.ceil(data.totalPages / data.number) + 1;

    return (
        <TableBody>
            {data.empty ? (
                <TableRow>
                    <TableCell
                        colSpan={statusPegawaiTableColumns.length}
                        className="text-center"
                    >
                        Data Not Found!
                    </TableCell>
                </TableRow>
            ) : (
                data.content.map((statusPegawai) => (
                    <TableRow key={statusPegawai.id}>
                        <TableCell width={60} align="right">{urut++}</TableCell>
                        <TableCell>{statusPegawai.nama}</TableCell>
                        <TableCell align="center">
                            <ButtonDeleteBuilder
                                id={statusPegawai.id}
                                href={`/master/status_pegawai/delete/${statusPegawai.id}`}
                                msg="Delete Status Pegawai"
                                action={hapus}
                            />
                            <ButtonEditBuilder
                                href={`/master/status_pegawai/edit/${statusPegawai.id}`}
                                msg="Edit Status Pegawai"
                            />
                        </TableCell>
                    </TableRow>
                ))
            )}
        </TableBody>
    );
};

export default StatusPegawaiTableBody;