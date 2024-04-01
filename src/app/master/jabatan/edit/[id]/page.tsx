import { getListLevel } from "@app/master/level/action";
import { getListOrganisasi } from "@app/master/organisasi/action";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { getJabatanById, getListJabatan } from "../../action";
import JabatanFormComponent from "../../form";

export const metadata = {
    title: "Edit Jabatan"
}
const EditJabatan = async ({ params }: { params: { id: number } }) => {
    const { id } = params
    const data = await getJabatanById(id)
    const jabatans = await getListJabatan()
    const organisasis = await getListOrganisasi()
    const levels = await getListLevel()

    return (
        <Card className="mx-12 sm:mx-0 md:mx-48">
            <CardHeader>
                <CardTitle>{metadata.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <JabatanFormComponent
                    jabatans={jabatans}
                    organisasis={organisasis}
                    levels={levels}
                    data={data}
                />
            </CardContent>
        </Card>
    );
}

export default EditJabatan;