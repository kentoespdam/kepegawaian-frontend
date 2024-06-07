import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import AddPegawaiForm from "./form";

const metadata = {
    title: "Tambah Data Biodata"
}
const AddPegawaiPage = () => {
    return (
        <Card className="max-w-full">
            <CardHeader>
                <CardTitle>{metadata.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <AddPegawaiForm />
            </CardContent>
        </Card>
    );
}

export default AddPegawaiPage;