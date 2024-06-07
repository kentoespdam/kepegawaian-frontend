import MainTemplate from "@components/template";
import type { ChildrenNode } from "@lib/index";

const MasterLayout = ({ children }: ChildrenNode) => {
    return (
        <MainTemplate>
            <div className="grid grid-cols-1 gap-4 sm:gap-4">
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    {children}
                </main>
            </div>
        </MainTemplate>
    )
}

export default MasterLayout;