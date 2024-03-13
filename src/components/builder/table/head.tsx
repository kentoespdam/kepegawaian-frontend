import { TableHead, TableHeader, TableRow } from "@components/ui/table";
import { CustomColumnDef } from "@tipes/index";

type TableHeadBuilderProps = {
    columns: CustomColumnDef[]
}
const TableHeadBuilder = ({ columns }: TableHeadBuilderProps) => {
    return (
        <TableHeader>
            <TableRow>
                {columns.map(head => (
                    <TableHead key={head.id}>
                        {head.label}
                    </TableHead>
                ))}
            </TableRow>
        </TableHeader>
    );
}

export default TableHeadBuilder;