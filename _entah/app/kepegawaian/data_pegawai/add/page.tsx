import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import { TooltipProvider } from "@components/ui/tooltip";
import BiodataFormComponent from "./form";

export const metadata = {
	title: "Tambah Data Pegawai",
};
const AddPegawaiPage = () => {
	return (
		<TooltipProvider>
			<div className="flex min-h-screen w-full flex-col bg-muted/60 rounded-lg">
				<div className="flex flex-col sm:gap-4 py-4">
					<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
						<Tabs defaultValue="baru">
							<div className="flex items-center">
								<TabsList>
									<TabsTrigger value="baru">Baru</TabsTrigger>
									<TabsTrigger value="pelamar">Pelamar</TabsTrigger>
									<TabsTrigger value="eksis">Eksisting</TabsTrigger>
									<TabsTrigger value="eksternal">Eksternal</TabsTrigger>
								</TabsList>
							</div>
							<TabsContent value="baru">
								<Card x-chunk="dashboard-06-chunk-0">
									<CardHeader>
										<CardTitle>Entry Profil Baru</CardTitle>
									</CardHeader>
									<CardContent>
										<BiodataFormComponent />
									</CardContent>
								</Card>
							</TabsContent>
						</Tabs>
					</main>
				</div>
			</div>
		</TooltipProvider>
	);
};

export default AddPegawaiPage;
