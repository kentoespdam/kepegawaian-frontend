import { getListLevel } from "@app/master/level/action";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import ProfesiFormComponent from "../../form";
import { getProfesiById } from "../../action";

export const metadata={
    title: "Edit Profesi"
}
const EditProfesiPage = async({params}: {params: {id: string}}) => {
    const id = Number(params.id)
    const levels = await getListLevel()
    const data=await getProfesiById(id)

    return (
        <Card className="mx-12 sm:mx-0 md:mx-48">
            <CardHeader>
                <CardTitle>{metadata.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <ProfesiFormComponent levels={levels} data={data} />
            </CardContent>
        </Card>
    );
}

export default EditProfesiPage;