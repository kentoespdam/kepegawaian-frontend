import ButtonDeleteBuilder from "@components/builder/button/delete";
import ButtonEditBuilder from "@components/builder/button/edit";
import { TableBody, TableCell, TableRow } from "@components/ui/table";
import type { Pageable } from "@_types/index";
import { jabatanTableColumns, type Jabatan } from "@_types/master/jabatan";
import { hapus } from "./action";

type JabatanTableBodyProps = {
    data: Pageable<Jabatan> | null
}
const JabatanTableBody = ({ data }: JabatanTableBodyProps) => {
    if (!data || data.empty)
        return (
            <TableBody>
                <TableRow>
                    <TableCell colSpan={jabatanTableColumns.length} className="text-center">Data Not Found!</TableCell>
                </TableRow>
            </TableBody>)

    return (
        <TableBody>
            {data.content.map((row) => (
                <TableRow key={row.id}>
                    <TableCell width={60} align="right">{row.id}</TableCell>
                    <TableCell>{row.nama}</TableCell>
                    <TableCell>{row.jabatan?.nama}</TableCell>
                    <TableCell>{row.organisasi.nama}</TableCell>
                    <TableCell>{row.level.nama}</TableCell>
                    <TableCell align="center">
                        <ButtonDeleteBuilder
                            id={row.id}
                            href={`/master/jabatan/${row.id}`}
                            msg="Delete Jabatan"
                            action={hapus}
                        />
                        <ButtonEditBuilder
                            href={`/master/jabatan/edit/${row.id}`}
                            msg="Edit Jabatan"
                        />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
}

export default JabatanTableBody;