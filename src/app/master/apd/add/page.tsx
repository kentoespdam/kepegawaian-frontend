import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import ApdFormPage from "../form";
import { getListProfesi } from "@app/master/profesi/action";

export const metadata = {
    title: "Add Master Apd",
};

const AddApdPage = async() => {
    const profesiList=await getListProfesi()

    return (
        <Card className="mx-12 sm:mx-0 md:mx-48">
            <CardHeader>
                <CardTitle>{metadata.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <ApdFormPage profesiList={profesiList} />
            </CardContent>
        </Card>
    );
}

export default AddApdPage;