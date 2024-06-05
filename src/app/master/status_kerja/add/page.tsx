import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import StatusKerjaForm from "../form";

export const metadata = {
	title: "Add Master Status Kerja",
};

const AddStatusKerjaPage = () => {
	return (
		<Card className="mx-12 sm:mx-0 md:mx-48">
			<CardHeader>
				<CardTitle>Tambah Status Kerja</CardTitle>
			</CardHeader>
			<CardContent>
				<StatusKerjaForm />
			</CardContent>
		</Card>
	);
};

export default AddStatusKerjaPage;
