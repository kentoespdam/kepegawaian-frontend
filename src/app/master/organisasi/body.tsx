import ButtonDeleteBuilder from "@components/builder/button/delete";
import ButtonEditBuilder from "@components/builder/button/edit";
import { TableBody, TableCell, TableRow } from "@components/ui/table";
import type { Pageable } from "@tipes/index";
import { organisasiTableColumns, type Organisasi } from "@tipes/master/organisasi";
import { hapus } from "./action";

type OrganisasiTableBodyProps = {
    data: Pageable<Organisasi>
}
const OrganisasiTableBody = ({ data }: OrganisasiTableBodyProps) => {
    let urut = data.first ? 1 : Math.ceil(data.totalPages / data.number) + 1;

    return (
        <TableBody>
            {data.empty ? (
                <TableRow>
                    <TableCell
                        colSpan={organisasiTableColumns.length}
                        className="text-center">
                        Data Not Found!
                    </TableCell>
                </TableRow>
            ) : (
                data.content.map((organisasi) => (
                    <TableRow key={organisasi.id}>
                        <TableCell width={60} align="right">{urut++}</TableCell>
                        <TableCell>{organisasi.nama}</TableCell>
                        <TableCell>{organisasi.organisasi?.nama}</TableCell>
                        <TableCell align="center">Level {organisasi.levelOrganisasi}</TableCell>
                        <TableCell align="center">
                            <ButtonDeleteBuilder
                                id={organisasi.id}
                                href={`/master/organisasi/delete/${organisasi.id}`}
                                msg="Delete Status Pegawai"
                                action={hapus}
                            />
                            <ButtonEditBuilder
                                href={`/master/organisasi/edit/${organisasi.id}`}
                                msg="Edit Status Pegawai"
                            />
                        </TableCell>
                    </TableRow>
                ))
            )}
        </TableBody>
    );
}

export default OrganisasiTableBody;