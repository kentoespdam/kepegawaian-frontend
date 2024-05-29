import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import JenisKeahlianFormComponent from "../form";

export const metadata = {
	title: "Add Master Jenis Keahlian",
};
const AddJenisKeahlianPage = () => {
	return (
		<Card className="mx-12 sm:mx-0 md:mx-48">
			<CardHeader>
				<CardTitle>{metadata.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<JenisKeahlianFormComponent />
			</CardContent>
		</Card>
	);
};

export default AddJenisKeahlianPage;
