import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import LevelForm from "../form";

export const metadata = {
	title: "Add Master Level",
};

const AddLevelPage = () => {
	return (
		<Card className="mx-12 sm:mx-0 md:mx-48">
			<CardHeader>
				<CardTitle>Tambah Level</CardTitle>
			</CardHeader>
			<CardContent>
				<LevelForm />
			</CardContent>
		</Card>
	);
};

export default AddLevelPage;
