import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import JenjangPendidikanFormComponent from "../form";

export const metadata = {
	title: "Add Master Jenjang Pendidikan",
};
const AddJenjangPendidikanPage = () => {
	return (
		<Card className="mx-12 sm:mx-0 md:mx-48">
			<CardHeader>
				<CardTitle>{metadata.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<JenjangPendidikanFormComponent />
			</CardContent>
		</Card>
	);
};

export default AddJenjangPendidikanPage;
