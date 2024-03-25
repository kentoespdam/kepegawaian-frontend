import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { getGradeById } from "../../action";
import GradeFormComponent from "../../form";
import { getListLevel } from "@app/master/level/action";

export const metadata = {
	title: "Edit Master Grade",
};

const EditGradePage = async ({ params }: { params: { id: number } }) => {
	const grade = await getGradeById(params.id);
	const levels = await getListLevel("");
	return (
		<Card className="mx-12 sm:mx-0 md:mx-48">
			<CardHeader>
				<CardTitle>{metadata.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<GradeFormComponent levels={levels} data={grade} />
			</CardContent>
		</Card>
	);
};

export default EditGradePage;
