import MainTemplate from "@components/template";
import PanelKananBiodataComponent from "@components/template/biodata/panel/kanan";
import PanelKiriBiodataComponent from "@components/template/biodata/panel/kiri";
import type { ChildrenNode } from "@lib/index";

const BiodataTemplate = ({ children }: ChildrenNode) => (
	<MainTemplate>
		<div className="grid min-h-screen w-full border md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
			<PanelKiriBiodataComponent />
			<PanelKananBiodataComponent>{children}</PanelKananBiodataComponent>
		</div>
	</MainTemplate>
);

export default BiodataTemplate;
