import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { getJenjangPendidikanById } from "../../action";
import JenjangPendidikanFormComponent from "../../form";

export const metadata = {
	title: "Edit Master Jenjang Pendidikan",
};
const EditJenjangPendidikanPage = async ({
	params,
}: { params: { id: number } }) => {
	const data = await getJenjangPendidikanById(params.id);
	return (
		<Card className="mx-12 sm:mx-0 md:mx-48">
			<CardHeader>
				<CardTitle>{metadata.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<JenjangPendidikanFormComponent data={data} />
			</CardContent>
		</Card>
	);
};

export default EditJenjangPendidikanPage;
