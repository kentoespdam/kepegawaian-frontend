import type { ChildrenNode } from "@lib/index";

const ContentComponent = ({ children }: ChildrenNode) => {
    return (
        <div className="w-full py-4 sm:px-8 md:px-30 h-full">
            {children}
        </div>
    );
}

export default ContentComponent;