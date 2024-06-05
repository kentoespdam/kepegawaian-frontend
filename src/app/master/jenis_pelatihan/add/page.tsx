import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import JenisPelatihanFormComponent from "../form";

export const metadata = {
	title: "Add Master Jenis Pelatihan",
};
const AddJenisPelatihanPage = () => {
	return (
		<Card className="mx-12 sm:mx-0 md:mx-48">
			<CardHeader>
				<CardTitle>{metadata.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<JenisPelatihanFormComponent />
			</CardContent>
		</Card>
	);
};

export default AddJenisPelatihanPage;