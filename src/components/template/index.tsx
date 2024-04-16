import type { ChildrenNode } from "@lib/index";
import TopBarComponent from "./topbar";
import ContentComponent from "./content";

const MainTemplate = ({ children }: ChildrenNode) => (
    <div className="w-screen min-h-screen flex flex-col justify-items-start">
        <TopBarComponent />
        <ContentComponent>{children}</ContentComponent>
        <footer className="fixed bottom-0 w-full text-center">
            &copy; Perumdam Tirta Satria
        </footer>
    </div>
);

export default MainTemplate;
