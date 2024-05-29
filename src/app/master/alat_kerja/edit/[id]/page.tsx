import { getListProfesi } from "@app/master/profesi/action";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import AlatKerjaFormComponent from "../../form";
import { getAlatKerjaById } from "../../action";

export const metadata = {
	title: "Edit Master Alat Kerja",
};

const EditAlatKerjaPage = async ({ params }: { params: { id: number } }) => {
	const profesiList = await getListProfesi();
	const data = await getAlatKerjaById(params.id);

	return (
		<Card className="mx-12 sm:mx-0 md:mx-48">
			<CardHeader>
				<CardTitle>{metadata.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<AlatKerjaFormComponent profesiList={profesiList} data={data} />
			</CardContent>
		</Card>
	);
};

export default EditAlatKerjaPage;
