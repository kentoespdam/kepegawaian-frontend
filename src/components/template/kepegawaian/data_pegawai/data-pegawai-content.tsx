"use client";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@components/ui/resizable";
import { Tabs, TabsList, TabsTrigger } from "@components/ui/tabs";
import { useQueries } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import BiodataTable from "./table/biodata-table";
import PegawaiTable from "./table/pegawai-table";
import { getBiodataPage } from "@app/kepegawaian/add/action";

type DataPegawaiContentProps = {
	searchParams: Record<string, string>;
};
const DataPegawaiContent = (props: DataPegawaiContentProps) => {
	const searchParams = useSearchParams();
	const [tabValue, setTabValue] = useState("pegawai");

	const queries = useQueries({
		queries: [
			{
				queryKey: ["pegawai", searchParams.toString()],
				queryFn: () => {
					console.log(searchParams.toString());
					console.log("pegawai executed");
					return null;
				},
				enabled: tabValue === "pegawai",
			},
			{
				queryKey: ["non-pegawai", searchParams.toString()],
				queryFn: async () => {
					const result = await getBiodataPage(searchParams.toString());
					return result;
				},
				enabled: tabValue === "non-pegawai",
			},
		],
	});

	return (
		<ResizablePanelGroup direction="horizontal" className="w-full gap-4">
			<ResizablePanel defaultSize={70} className="border rounded p-2">
				<Tabs defaultValue={tabValue} onValueChange={(val) => setTabValue(val)}>
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger
							value="pegawai"
							className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
						>
							Pegawai
						</TabsTrigger>
						<TabsTrigger
							value="non-pegawai"
							className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
						>
							Non Pegawai
						</TabsTrigger>
					</TabsList>
					<PegawaiTable />
					<BiodataTable />
				</Tabs>
			</ResizablePanel>
			<ResizableHandle />
			<ResizablePanel defaultSize={30} className="border rounded p-2">
				Kanan
			</ResizablePanel>
		</ResizablePanelGroup>
	);
};

export default DataPegawaiContent;
