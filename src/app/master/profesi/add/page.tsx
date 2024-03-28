import { getListLevel } from "@app/master/level/action";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import ProfesiFormComponent from "../form";

export const metadata = {
    title: "Tambah Profesi"
}

const AddProfesi = async () => {
    const levels = await getListLevel()

    return (
        <Card className="mx-12 sm:mx-0 md:mx-48">
            <CardHeader>
                <CardTitle>{metadata.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <ProfesiFormComponent levels={levels} />
            </CardContent>
        </Card>
    );
}

export default AddProfesi;