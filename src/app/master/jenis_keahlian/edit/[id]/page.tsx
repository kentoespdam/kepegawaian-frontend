import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { getJenisKeahlianById } from "../../action";
import JenisKeahlianFormComponent from "../../form";

export const metadata = {
	title: "Edit Master Jenis Keahlian",
};
const EditJenisKeahlianPage = async ({
	params,
}: { params: { id: number } }) => {
	const data = await getJenisKeahlianById(params.id);
	return (
		<Card className="mx-12 sm:mx-0 md:mx-48">
			<CardHeader>
				<CardTitle>{metadata.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<JenisKeahlianFormComponent data={data} />
			</CardContent>
		</Card>
	);
};

export default EditJenisKeahlianPage;
