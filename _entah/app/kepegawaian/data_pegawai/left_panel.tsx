import { pegawaiTableColumns } from "@_types/pegawai";
import TableHeadBuilder from "@components/builder/table/head";
import { Table } from "@components/ui/table";
import { getDataPegawai } from "./action";

const KepegawaianLeftPanelComponent = async({
	searchParams,
}: { searchParams: Record<string, string> }) => {
	const urlSearchParams=new URLSearchParams(searchParams)
	const data=await getDataPegawai(urlSearchParams.toString())
	console.log(data)

	return (
		<div className="grid grid-cols-1">
			<Table>
				<TableHeadBuilder columns={pegawaiTableColumns} />
			</Table>
		</div>
	);
};

export default KepegawaianLeftPanelComponent;
