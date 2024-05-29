import { getListProfesi } from "@app/master/profesi/action";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import AlatKerjaFormComponent from "../form";

export const metadata={
    title:"Add Master Alat Kerja"
}
const AddAlatKerjaPage = async() => {
    const profesiList=await getListProfesi()

    return (
        <Card className="mx-12 sm:mx-0 md:mx-48">
            <CardHeader>
                <CardTitle>{metadata.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <AlatKerjaFormComponent profesiList={profesiList} />
            </CardContent>
        </Card>
    );
}

export default AddAlatKerjaPage;