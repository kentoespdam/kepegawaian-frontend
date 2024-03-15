import ButtonDeleteBuilder from "@components/builder/button/delete";
import ButtonEditBuilder from "@components/builder/button/edit";
import { TableBody, TableCell, TableRow } from "@components/ui/table";
import { Pageable } from "@tipes/index";
import {
	StatusPegawai,
	statusPegawaiTableColumns,
} from "@tipes/master/status-pegawai";
import { hapus } from "../../../../app/master/status-pegawai/action";

type StatusPegawaiTableBodyProps = {
	data: Pageable<StatusPegawai>;
};
const StatusPegawaiTableBody = ({ data }: StatusPegawaiTableBodyProps) => {
	let urut = data.first ? 1 : Math.ceil(data.totalPages / data.number) + 1;

	return (
		<TableBody>
			{data.empty ? (
				<TableRow>
					<TableCell
						colSpan={statusPegawaiTableColumns.length}
						className="text-center"
					>
						Data Not Found!
					</TableCell>
				</TableRow>
			) : (
				data.content.map((statusPegawai) => (
					<TableRow key={statusPegawai.id}>
						<TableCell>{urut++}</TableCell>
						<TableCell>{statusPegawai.nama}</TableCell>
						<TableCell>
							<ButtonDeleteBuilder
								id={statusPegawai.id}
								href={`/master/status-pegawai/delete/${statusPegawai.id}`}
								msg="Delete Status Pegawai"
								action={hapus}
							/>
							<ButtonEditBuilder
								href={`/master/status-pegawai/edit/${statusPegawai.id}`}
								msg="Edit Status Pegawai"
							/>
						</TableCell>
					</TableRow>
				))
			)}
		</TableBody>
	);
};

export default StatusPegawaiTableBody;
