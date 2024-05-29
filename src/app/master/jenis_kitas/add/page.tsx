import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import JenisKitasFormComponent from "../form";

export const metadata = {
	title: "Add Master Jenis Kartu Identitas",
};
const AddJenisKitasPage = () => {
	return (
		<Card className="mx-12 sm:mx-0 md:mx-48">
			<CardHeader>
				<CardTitle>{metadata.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<JenisKitasFormComponent />
			</CardContent>
		</Card>
	);
};

export default AddJenisKitasPage;
