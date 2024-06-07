import type { ChildrenNode } from "@lib/index";

const ContentComponent = ({ children }: ChildrenNode) => {
    return (
        <main className="max-w-full">
            {children}
        </main>
    );
}

export default ContentComponent;