import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { getStatusKerjaById } from "../../action";
import StatusKerjaForm from "../../form";

export const metadata = {
	title: "Edit Status Kerja",
};
const EditStatusKerjaPage = async ({ params }: { params: { id: number } }) => {
	const { id } = params;
	const level = await getStatusKerjaById(id);

	return (
		<Card className="mx-12 sm:mx-0 md:mx-48">
			<CardHeader>
				<CardTitle>Edit Status Kerja</CardTitle>
			</CardHeader>
			<CardContent>
				<StatusKerjaForm data={level} />
			</CardContent>
		</Card>
	);
};

export default EditStatusKerjaPage;
