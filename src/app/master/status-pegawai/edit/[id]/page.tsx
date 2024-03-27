import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { getStatusPegawaiById } from "../../action";
import StatusPegawaiForm from "../../form";

export const metadata = {
	title: "Edit Status Pegawai",
};
const EditStatusPegawaiPage = async ({
	params,
}: { params: { id: number } }) => {
	const { id } = params;
	const statusPegawai = await getStatusPegawaiById(id);

	return (
		<Card className="mx-12 sm:mx-0 md:mx-48">
			<CardHeader>
				<CardTitle>{metadata.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<StatusPegawaiForm data={statusPegawai} />
			</CardContent>
		</Card>
	);
};

export default EditStatusPegawaiPage;
