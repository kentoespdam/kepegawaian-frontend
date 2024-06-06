import NonPegawaiTabComponent from "../../../components/template/biodata/tabs/non-pegawai";
import PegawaiTabComponent from "../../../components/template/biodata/tabs/pegawai";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@components/ui/resizable";
import { Tabs, TabsList, TabsTrigger } from "@components/ui/tabs";
const DataPegawaiPage = ({
	searchParams,
}: { searchParams: Record<string, string> }) => {
	return (
		<Tabs
			defaultValue="non-pegawai"
			className="w-[400]">
			<TabsList className="grid w-full grid-cols-2">
				<TabsTrigger value="pegawai">Pegawai</TabsTrigger>
				<TabsTrigger value="non-pegawai">Non Pegawai</TabsTrigger>
			</TabsList>

			<ResizablePanelGroup
				direction="horizontal"
				className="h-full w-full mt-2 gap-2"
			>
				<ResizablePanel defaultSize={75} className="">
					<PegawaiTabComponent />
					<NonPegawaiTabComponent />
				</ResizablePanel>
				<ResizableHandle withHandle />
				<ResizablePanel defaultSize={25}>
					<div className="flex h-full p-4">
						kanan
					</div>
				</ResizablePanel>
			</ResizablePanelGroup>
		</Tabs>
	);
};

export default DataPegawaiPage;
