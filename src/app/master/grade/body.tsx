import ButtonDeleteBuilder from "@components/builder/button/delete";
import ButtonEditBuilder from "@components/builder/button/edit";
import { TableBody, TableCell, TableRow } from "@components/ui/table";
import { rupiah } from "@helpers/number";
import type { Pageable } from "@_types/index";
import { gradeTableColumns, type Grade } from "@_types/master/grade";
import { hapus } from "./action";

const GradeTableBody = ({ data }: { data: Pageable<Grade> | null }) => {
	if (!data || data.empty)
		return (
			<TableBody>
				<TableRow>
					<TableCell colSpan={gradeTableColumns.length} className="text-center">
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
					<TableCell width={60} align="right">{urut++}</TableCell>
					<TableCell>{row.level.nama}</TableCell>
					<TableCell>GRADE-{row.grade}</TableCell>
					<TableCell align="right">{rupiah(row.tukin)}</TableCell>
					<TableCell align="center">
						<ButtonDeleteBuilder
							id={row.id}
							href={`/master/grade/${row.id}`}
							msg="Delete Grade"
							action={hapus}
						/>
						<ButtonEditBuilder
							href={`/master/grade/edit/${row.id}`}
							msg="Edit Grade"
						/>
					</TableCell>
				</TableRow>
			))}
		</TableBody>
	);
};

export default GradeTableBody;
