import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import GolonganForm from "../form";
import { getListLevel } from "@app/master/level/action";

export const metadata = {
	title: "Add Master Grade"
}

const AddGradePage = async () => {
	const levels = await getListLevel("")

	return (
		<Card className="mx-12 sm:mx-0 md:mx-48">
			<CardHeader>
				<CardTitle>{metadata.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<GolonganForm levels={levels} />
			</CardContent>
		</Card>
	);
}

export default AddGradePage;