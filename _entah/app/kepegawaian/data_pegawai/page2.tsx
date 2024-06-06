import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@components/ui/resizable";
import KepegawaianLeftPanelComponent from "./left_panel";

const DataPegawaiPage = ({
	searchParams,
}: { searchParams: Record<string, string> }) => {
	return (
		<ResizablePanelGroup
			direction="horizontal"
			className="min-h-[200px] w-full rounded-lg border"
		>
			<ResizablePanel defaultSize={75}>
				<div className="flex h-full p-4">
					<KepegawaianLeftPanelComponent searchParams={searchParams} />
				</div>
			</ResizablePanel>
			<ResizableHandle withHandle />
			<ResizablePanel defaultSize={25}>
				<div className="flex h-full p-4">
					<span className="font-semibold">Content</span>
				</div>
			</ResizablePanel>
		</ResizablePanelGroup>
	);
};

export default DataPegawaiPage;
