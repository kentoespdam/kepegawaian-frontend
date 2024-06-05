import ButtonDeleteBuilder from "@components/builder/button/delete";
import ButtonEditBuilder from "@components/builder/button/edit";
import { TableBody, TableCell, TableRow } from "@components/ui/table";
import type { Pageable } from "@_types/index";
import { type StatusKerja, statusKerjaTableColumns } from "@_types/master/status_kerja";
import { hapus } from "./action";

type StatusKerjaTableBodyProps = {
	data: Pageable<StatusKerja> | null;
};

const StatusKerjaTableBody = ({ data }: StatusKerjaTableBodyProps) => {
	if (!data || data.empty)
		return (
			<TableBody>
				<TableRow>
					<TableCell colSpan={statusKerjaTableColumns.length} className="text-center">
						Data Not Found!
					</TableCell>
				</TableRow>
			</TableBody>
		);

	let urut = data.first ? 1 : Math.ceil(data.totalPages / data.number) + 1;

	return (
		<TableBody>
			{data.content.map((row) => (
				<TableRow key={row.id}>
					<TableCell align="right" width={60}>{urut++}</TableCell>
					<TableCell>{row.nama}</TableCell>
					<TableCell align="center">
						<ButtonDeleteBuilder
							id={row.id}
							href={`/master/status_kerja/${row.id}`}
							msg="Delete StatusKerja"
							action={hapus}
						/>
						<ButtonEditBuilder
							href={`/master/status_kerja/edit/${row.id}`}
							msg="Edit StatusKerja"
						/>
					</TableCell>
				</TableRow>
			))}
		</TableBody>
	);
};

export default StatusKerjaTableBody;
