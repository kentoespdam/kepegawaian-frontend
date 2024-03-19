import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import GolonganForm from "../form";

export const metadata = {
	title: "Add Master Golongan",
};

const AddGolonganPage = () => {
	return (
		<Card className="mx-12 sm:mx-0 md:mx-48">
			<CardHeader>
				<CardTitle>Tambah Golongan</CardTitle>
			</CardHeader>
			<CardContent>
				<GolonganForm />
			</CardContent>
		</Card>
	);
};

export default AddGolonganPage;
