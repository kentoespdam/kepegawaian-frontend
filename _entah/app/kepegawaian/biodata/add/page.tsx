import { Card, CardHeader, CardTitle, CardContent } from "@components/ui/card";
import { TooltipProvider } from "@components/ui/tooltip";
import BiodataAddForm from "./form";

export const metadata = {
    title: "Tambah Biodata"
}
const BiodataAddPage = () => {
    return (
            <Card className="max-w-full">
                <CardHeader>
                    <CardTitle>{metadata.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <BiodataAddForm />
                </CardContent>
            </Card>
    );
}

export default BiodataAddPage;