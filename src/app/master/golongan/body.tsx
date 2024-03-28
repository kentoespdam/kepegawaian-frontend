import ButtonDeleteBuilder from "@components/builder/button/delete";
import ButtonEditBuilder from "@components/builder/button/edit";
import { TableBody, TableCell, TableRow } from "@components/ui/table";
import type { Pageable } from "@tipes/index";
import { type Golongan, golonganTableColumns } from "@tipes/master/golongan";
import { hapus } from "./action";

const GolonganTableBody = ({ data }: { data: Pageable<Golongan> | null }) => {
	if (!data || data.empty)
		return (
			<TableBody>
				<TableRow>
					<TableCell
						colSpan={golonganTableColumns.length}
						className="text-center"
					>
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
					<TableCell>{row.golongan}</TableCell>
					<TableCell>{row.pangkat}</TableCell>
					<TableCell align="center">
						<ButtonDeleteBuilder
							id={row.id}
							href={`/master/golongan/${row.id}`}
							msg="Delete Golongan"
							action={hapus}
						/>
						<ButtonEditBuilder
							href={`/master/golongan/edit/${row.id}`}
							msg="Edit Golongan"
						/>
					</TableCell>
				</TableRow>
			))}
		</TableBody>
	);
};

export default GolonganTableBody;
