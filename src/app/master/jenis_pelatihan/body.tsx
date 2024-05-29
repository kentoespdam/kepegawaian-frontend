import type { Pageable } from "@_types/index";
import {
	jenisPelatihanTableColumn,
	type JenisPelatihan,
} from "@_types/master/jenis_pelatihan";
import ButtonDeleteBuilder from "@components/builder/button/delete";
import ButtonEditBuilder from "@components/builder/button/edit";
import { TableBody, TableCell, TableRow } from "@components/ui/table";
import { getUrut } from "@helpers/urut_table";
import { hapus } from "./action";

const JenisPelatihanTableBody = ({
	data,
}: { data: Pageable<JenisPelatihan> | null }) => {
	if (!data || data.empty)
		return (
			<TableBody>
				<TableRow>
					<TableCell
						colSpan={jenisPelatihanTableColumn.length}
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
							href={`/master/jenis_pelatihan/delete/${row.id}`}
							msg="Delete Jenis Pelatihan"
							action={hapus}
						/>
						<ButtonEditBuilder
							href={`/master/jenis_pelatihan/edit/${row.id}`}
							msg="Edit Jenis Pelatihan"
						/>
					</TableCell>
				</TableRow>
			))}
		</TableBody>
	);
};

export default JenisPelatihanTableBody;
