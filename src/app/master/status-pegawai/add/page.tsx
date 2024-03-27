import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import StatusPegawaiForm from "../form";

export const metadata = {
	title: "Tambah Status Pegawai",
};
const AddStatusPegawai = () => {
	return (
		<Card className="mx-12 sm:mx-0 md:mx-48">
			<CardHeader>
				<CardTitle>{metadata.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<StatusPegawaiForm />
			</CardContent>
		</Card>
	);
};

export default AddStatusPegawai;
