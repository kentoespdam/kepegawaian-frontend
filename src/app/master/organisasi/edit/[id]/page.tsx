import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { getListOrganisasi, getOrganisasiById } from "../../action";
import OrganisasiFormComponent from "../../form";

export const metadata = {
    title: "Edit Organisasi"
}
const EditOrganisasi = async ({params}:{params:{id:number}}) => {
    const {id}=params
    const orgParent = await getListOrganisasi()
    const data=await getOrganisasiById(id)
    
    return (
        <Card className="mx-12 sm:mx-0 md:mx-48">
            <CardHeader>
                <CardTitle>{metadata.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <OrganisasiFormComponent orgParent={orgParent} data={data} />
            </CardContent>
        </Card>
    );
}

export default EditOrganisasi;