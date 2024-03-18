import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { getLevelById } from "../../action";
import LevelForm from "../../form";

export const metadata = {
	title: "Edit Level",
};
const EditLevelPage = async ({ params }: { params: { id: number } }) => {
	const { id } = params;
	const level = await getLevelById(id);

	return (
		<Card className="mx-12 sm:mx-0 md:mx-48">
			<CardHeader>
				<CardTitle>Edit Level</CardTitle>
			</CardHeader>
			<CardContent>
				<LevelForm data={level} />
			</CardContent>
		</Card>
	);
};

export default EditLevelPage;
