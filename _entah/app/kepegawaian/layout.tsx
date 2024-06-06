import MainTemplate from "@components/template";
import { TooltipProvider } from "@components/ui/tooltip";
import type { ChildrenNode } from "@lib/index";

const MasterLayout = ({ children }: ChildrenNode) => {
	return (
		<MainTemplate>
			<TooltipProvider>
				{children}
			</TooltipProvider>
		</MainTemplate>
	);
}

export default MasterLayout;