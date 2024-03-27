import MainTemplate from "@components/template";
import type { ChildrenNode } from "@lib/index";

const MasterTemplate = ({ children }: ChildrenNode) => {
	return <MainTemplate>{children}</MainTemplate>;
};

export default MasterTemplate;
