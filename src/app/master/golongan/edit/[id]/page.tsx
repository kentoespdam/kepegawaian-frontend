import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import GolonganForm from "../../form";
import { getGolonganById } from "../../action";

export const metadata = {
	title: "Edit Master Golongan",
};

const EditGolonganPage = async ({ params }: { params: { id: number } }) => {
	const golongan = await getGolonganById(params.id);
	return (
		<Card className="mx-12 sm:mx-0 md:mx-48">
			<CardHeader>
				<CardTitle>Tambah Golongan</CardTitle>
			</CardHeader>
			<CardContent>
				<GolonganForm data={golongan} />
			</CardContent>
		</Card>
	);
};

export default EditGolonganPage;
