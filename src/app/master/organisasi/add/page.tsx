import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { getListOrganisasi } from "../action";
import OrganisasiFormComponent from "../form";

export const metadata = {
    title: "Tambah Organisasi"
}
const AddOrganisasi = async () => {
    const orgParent = await getListOrganisasi()
    return (
        <Card className="mx-12 sm:mx-0 md:mx-48">
            <CardHeader>
                <CardTitle>{metadata.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <OrganisasiFormComponent orgParent={orgParent} />
            </CardContent>
        </Card>
    );
}

export default AddOrganisasi;