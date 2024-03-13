import { ChildrenNode } from "@lib/index";
import TopBarComponent from "./topbar";
import ContentComponent from "./content";

const MainTemplate = ({ children }: ChildrenNode) => {
    return (
        <div className="w-screen min-h-screen flex flex-col justify-between">
            <div className="flex flex-col">
                <TopBarComponent />
                <ContentComponent>{children}</ContentComponent>

                <div className="fixed bottom-0 w-full text-center">
                    &copy; Perumdam Tirta Satria
                </div>
            </div>
        </div>
    );
}

export default MainTemplate;