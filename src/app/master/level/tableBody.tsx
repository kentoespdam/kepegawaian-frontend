import ButtonDeleteBuilder from "@components/builder/button/delete";
import ButtonEditBuilder from "@components/builder/button/edit";
import { TableBody, TableCell, TableRow } from "@components/ui/table";
import type { Pageable } from "@tipes/index";
import { type Level, levelTableColumns } from "@tipes/master/level";
import { hapus } from "./action";

type LevelTableBodyProps = {
	data: Pageable<Level> | null;
};

const LevelTableBody = ({ data }: LevelTableBodyProps) => {
	if (!data || data.empty)
		return (
			<TableBody>
				<TableRow>
					<TableCell colSpan={levelTableColumns.length} className="text-center">
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
							href={`/master/level/${row.id}`}
							msg="Delete Level"
							action={hapus}
						/>
						<ButtonEditBuilder
							href={`/master/level/edit/${row.id}`}
							msg="Edit Level"
						/>
					</TableCell>
				</TableRow>
			))}
		</TableBody>
	);
};

export default LevelTableBody;
