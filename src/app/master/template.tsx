import MainTemplate from "@components/template";
import { ChildrenNode } from "@lib/index";

const MasterTemplate = ({ children }: ChildrenNode) => {
    return (
        <MainTemplate>
            {children}
        </MainTemplate>
    );
}

export default MasterTemplate;