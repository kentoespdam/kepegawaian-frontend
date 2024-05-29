import type { Pageable } from "@_types/index";
import {
	jenisKitasTableColumn,
	type JenisKitas,
} from "@_types/master/jenis_kitas";
import ButtonDeleteBuilder from "@components/builder/button/delete";
import ButtonEditBuilder from "@components/builder/button/edit";
import { TableBody, TableCell, TableRow } from "@components/ui/table";
import { getUrut } from "@helpers/urut_table";
import { hapus } from "./action";

const JenisKitasTableBody = ({
	data,
}: { data: Pageable<JenisKitas> | null }) => {
	if (!data || data.empty)
		return (
			<TableBody>
				<TableRow>
					<TableCell
						colSpan={jenisKitasTableColumn.length}
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
					<TableCell>{row.nama}</TableCell>
					<TableCell align="center">
						<ButtonDeleteBuilder
							id={row.id}
							href={`/master/jenis_kitas/delete/${row.id}`}
							msg="Delete Jenis Keahlian"
							action={hapus}
						/>
						<ButtonEditBuilder
							href={`/master/jenis_kitas/edit/${row.id}`}
							msg="Edit Jenis Keahlian"
						/>
					</TableCell>
				</TableRow>
			))}
		</TableBody>
	);
};

export default JenisKitasTableBody;
