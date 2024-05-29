import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { getJenisPelatihanById } from "../../action";
import JenisPelatihanFormComponent from "../../form";

export const metadata = {
	title: "Edit Master Jenis Kartu Identitas",
};
const EditJenisPelatihanPage = async ({
	params,
}: { params: { id: number } }) => {
	const data = await getJenisPelatihanById(params.id);
	return (
		<Card className="mx-12 sm:mx-0 md:mx-48">
			<CardHeader>
				<CardTitle>{metadata.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<JenisPelatihanFormComponent data={data} />
			</CardContent>
		</Card>
	);
};

export default EditJenisPelatihanPage;
