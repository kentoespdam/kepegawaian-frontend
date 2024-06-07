import type { Pageable } from "@_types/index";
import { biodataTableColumns, type Biodata } from "@_types/profil/biodata";
import { TableCell, TableRow } from "@components/ui/table";

const BiodataTableBody = ({ data }: { data?: Pageable<Biodata> }) => {
	if (!data)
		return (
			<TableRow>
				<TableCell colSpan={biodataTableColumns.length}>
					Data Tidak ditemukan
				</TableCell>
			</TableRow>
		);

	let urut = data.number * data.size + 1;

	return (
		<>
			{data.content.map((biodata) => (
				<TableRow key={biodata.nik}>
					<TableCell>{urut++}</TableCell>
					<TableCell>{biodata.nik}</TableCell>
					<TableCell className="w-fit whitespace-nowrap">
						{biodata.nama}
					</TableCell>
					<TableCell>{biodata.jenisKelamin}</TableCell>
					<TableCell>{biodata.tempatLahir}</TableCell>
					<TableCell className="w-fit whitespace-nowrap">
						{biodata.tanggalLahir}
					</TableCell>
					<TableCell className="w-[200]">{biodata.alamat}</TableCell>
					<TableCell>{biodata.telp}</TableCell>
					<TableCell>{biodata.agama}</TableCell>
					<TableCell>{biodata.ibuKandung}</TableCell>
					<TableCell className="text-center">
						{biodata.pendidikanTerakhir.nama}
					</TableCell>
					<TableCell className="text-center">{biodata.golonganDarah}</TableCell>
					<TableCell>{biodata.statusKawin}</TableCell>
					<TableCell className="w-[200]">{biodata.notes}</TableCell>
				</TableRow>
			))}
		</>
	);
};

export default BiodataTableBody;
