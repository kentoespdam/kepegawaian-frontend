import type { Pageable } from "@_types/index";
import {
	type AlatKerja,
	alatKerjaTableColumns,
} from "@_types/master/alat_kerja";
import ButtonDeleteBuilder from "@components/builder/button/delete";
import ButtonEditBuilder from "@components/builder/button/edit";
import { TableBody, TableCell, TableRow } from "@components/ui/table";
import { getUrut } from "@helpers/urut_table";
import { hapus } from "./action";

type AlatKerjaTableBodyProps = {
	data: Pageable<AlatKerja> | null;
};
const AlatKerjaTableBody = ({ data }: AlatKerjaTableBodyProps) => {
	if (!data || data.empty)
		return (
			<TableBody>
				<TableRow>
					<TableCell
						colSpan={alatKerjaTableColumns.length}
						className="text-center"
					>
						Data Not Found!
					</TableCell>
				</TableRow>
			</TableBody>
		);

	let urut = getUrut(data);
	return (
		<TableBody>
			{data.content.map((row) => (
				<TableRow key={row.id}>
					<TableCell align="right" width={60}>
						{urut++}
					</TableCell>
					<TableCell>{row.profesi.nama}</TableCell>
					<TableCell>{row.nama}</TableCell>
					<TableCell align="center">
						<ButtonDeleteBuilder
							id={row.id}
							href={`/master/alat_kerja/delete/${row.id}`}
							msg="Delete Alat Kerja"
							action={hapus}
						/>
						<ButtonEditBuilder
							href={`/master/alat_kerja/edit/${row.id}`}
							msg="Edit Alat Kerja"
						/>
					</TableCell>
				</TableRow>
			))}
		</TableBody>
	);
};

export default AlatKerjaTableBody;
