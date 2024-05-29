import type { Pageable } from "@_types/index";
import {
	jenjangPendidikanTableColumn,
	type JenjangPendidikan,
} from "@_types/master/jenjang_pendidikan";
import ButtonDeleteBuilder from "@components/builder/button/delete";
import ButtonEditBuilder from "@components/builder/button/edit";
import { TableBody, TableCell, TableRow } from "@components/ui/table";
import { getUrut } from "@helpers/urut_table";
import { hapus } from "./action";

const JenjangPendidikanTableBody = ({
	data,
}: { data: Pageable<JenjangPendidikan> | null }) => {
	if (!data || data.empty)
		return (
			<TableBody>
				<TableRow>
					<TableCell
						colSpan={jenjangPendidikanTableColumn.length}
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
					<TableCell>{row.seq}</TableCell>
					<TableCell align="center">
						<ButtonDeleteBuilder
							id={row.id}
							href={`/master/jenjang_pendidikan/delete/${row.id}`}
							msg="Delete Jenjang Pendidikan"
							action={hapus}
						/>
						<ButtonEditBuilder
							href={`/master/jenjang_pendidikan/edit/${row.id}`}
							msg="Edit Jenjang Pendidikan"
						/>
					</TableCell>
				</TableRow>
			))}
		</TableBody>
	);
};

export default JenjangPendidikanTableBody;
