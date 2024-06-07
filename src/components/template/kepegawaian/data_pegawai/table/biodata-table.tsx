import { type Biodata, biodataTableColumns } from "@_types/profil/biodata";
import SearchBuilder from "@components/builder/search";
import TableHeadBuilder from "@components/builder/table/head";
import { Table, TableBody, TableCell, TableRow } from "@components/ui/table";
import { TabsContent } from "@components/ui/tabs";
import BiodataTableBody from "./body";
import PaginationBuilder from "@components/builder/table/pagination";
import { useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import type { Pageable } from "@_types/index";

const BiodataTable = () => {
	const searchParams = useSearchParams();
	const queryClient = useQueryClient();

	const data = queryClient.getQueryData<Pageable<Biodata>>([
		"non-pegawai",
		searchParams.toString(),
	]);

	return (
		<TabsContent value="non-pegawai">
			<SearchBuilder columns={biodataTableColumns} />
			<Table className="border w-full">
				<TableHeadBuilder columns={biodataTableColumns} />
				<TableBody>
					<BiodataTableBody data={data} />
				</TableBody>
			</Table>
			<PaginationBuilder data={data ?? null} />
		</TabsContent>
	);
};

export default BiodataTable;
