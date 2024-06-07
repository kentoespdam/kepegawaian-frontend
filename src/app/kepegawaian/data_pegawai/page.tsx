import DataPegawaiContent from "@components/template/kepegawaian/data_pegawai/data-pegawai-content";
import TopMenuDataPegawai from "@components/template/kepegawaian/data_pegawai/top-menu";

const DataKepegawaianPage = ({
    searchParams,
}: { searchParams: Record<string, string> }) => {
    return (
        <div className="grid gap-4">
            <TopMenuDataPegawai />
            <DataPegawaiContent searchParams={searchParams} />
        </div>
    );
}

export default DataKepegawaianPage;