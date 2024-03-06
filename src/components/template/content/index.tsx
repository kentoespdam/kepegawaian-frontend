import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { ChildrenNode } from "@lib/index";

const ContentComponent = ({ children }: ChildrenNode) => {
    return (
        <div className="w-full px-4 my-2">
            <Card className="w-full bg-transparent bg-gradient-to-b from-violet to-transparent shadow-xl shadow-gray-600">
                <CardHeader>
                    <CardTitle>Wkwkwkw</CardTitle>
                </CardHeader>
                <CardContent>
                    {children}
                </CardContent>
            </Card>
        </div>
    );
}

export default ContentComponent;