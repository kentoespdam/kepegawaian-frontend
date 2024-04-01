import { getListLevel } from "@app/master/level/action";
import { getListOrganisasi } from "@app/master/organisasi/action";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { getListJabatan } from "../action";
import JabatanFormComponent from "../form";

export const metadata = {
    title: "Tambah Jabatan"
}
const AddJabatan = async () => {
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
                />
            </CardContent>
        </Card>
    );
}

export default AddJabatan;