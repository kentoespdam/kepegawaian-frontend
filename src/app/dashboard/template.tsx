import MainTemplate from "@components/template";
import { ChildrenNode } from "@lib/index";

const DashboardTemplate = ({ children }: ChildrenNode) => {
    return (
        <MainTemplate>
            {children}
        </MainTemplate>
    );
}

export default DashboardTemplate;