import ButtonDeleteBuilder from "@components/builder/button/delete";
import ButtonEditBuilder from "@components/builder/button/edit";
import { TableBody, TableCell, TableRow } from "@components/ui/table";
import { Pageable } from "@tipes/index";
import { Grade, gradeTableColumns } from "@tipes/master/grade";
import { hapus } from "./action";
import { rupiah } from "@helpers/number";

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
					<TableCell>{urut++}</TableCell>
					<TableCell>{row.level.nama}</TableCell>
					<TableCell>GRADE-{row.grade}</TableCell>
					<TableCell align="right">{rupiah(row.tukin)}</TableCell>
					<TableCell>
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
