import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select";
import type { CustomColumnDef } from "@tipes/index";
import type { Organisasi } from "@tipes/master/organisasi";

type OrganisasiSearchBuilderProps = {
    col: CustomColumnDef
    list: Organisasi[]
    id: string | null
    handleSearch: (k: string, v: unknown) => void
}
const OrganisasiSearchBuilder = ({ col, list, id, handleSearch }: OrganisasiSearchBuilderProps) => {
    const currentId = !id ? "kosong" : id

    return (
        <Select name={col.id} value={currentId} defaultValue={currentId} onValueChange={(v) => handleSearch(col.id, v)}>
            <SelectTrigger id={col.id} aria-required="true" className="min-w-full">
                <SelectValue placeholder={`Search For ${col.label}`} />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="kosong">{`Search For ${col.label}`}</SelectItem>
                {list?.map((row) => (
                    <SelectItem key={row.id} value={String(row.id)}>
                        {row.nama}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}

export default OrganisasiSearchBuilder;