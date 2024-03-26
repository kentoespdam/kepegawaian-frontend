import MainTemplate from "@components/template";
import type { ChildrenNode } from "@lib/index";

const DashboardTemplate = ({ children }: ChildrenNode) => {
	return <MainTemplate>{children}</MainTemplate>;
};

export default DashboardTemplate;
