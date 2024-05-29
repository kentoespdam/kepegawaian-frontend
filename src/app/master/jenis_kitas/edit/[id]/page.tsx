import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { getJenisKitasById } from "../../action";
import JenisKitasFormComponent from "../../form";

export const metadata = {
	title: "Edit Master Jenis Kartu Identitas",
};
const EditJenisKitasPage = async ({ params }: { params: { id: number } }) => {
	const data = await getJenisKitasById(params.id);
	return (
		<Card className="mx-12 sm:mx-0 md:mx-48">
			<CardHeader>
				<CardTitle>{metadata.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<JenisKitasFormComponent data={data} />
			</CardContent>
		</Card>
	);
};

export default EditJenisKitasPage;
