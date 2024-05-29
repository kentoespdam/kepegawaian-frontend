import { getListProfesi } from "@app/master/profesi/action";
import { getApdById } from "../../action";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import ApdFormPage from "../../form";

export const metadata = {
    title: "Edit APD"
}
const ApdEditPage = async ({ params }: { params: { id: number } }) => {
    const profesiList = await getListProfesi()
    const data = await getApdById(params.id)

    return (
        <Card className="mx-12 sm:mx-0 md:mx-48">
            <CardHeader>
                <CardTitle>{metadata.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <ApdFormPage profesiList={profesiList} data={data} />
            </CardContent>
        </Card>
    );
}

export default ApdEditPage;