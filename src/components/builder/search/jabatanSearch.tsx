import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select";
import type { CustomColumnDef } from "@_types/index";
import type { Jabatan } from "@_types/master/jabatan";

type JabatanSearchBuilderProps = {
    col: CustomColumnDef
    list: Jabatan[]
    id: string | null
    handleSearch: (k: string, v: unknown) => void
}
const JabatanSearchBuilder = ({ col, list, id, handleSearch }: JabatanSearchBuilderProps) => {
    const currentId = !id ? "kosong" : id

    return (
        <Select name={col.id} value={currentId} defaultValue={currentId} onValueChange={(v) => handleSearch(col.id, v)}>
            <SelectTrigger id={col.id} className="min-w-full">
                <SelectValue placeholder={`Search for ${col.label}`} />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="kosong">Search for {col.label}</SelectItem>
                {list?.map((row) => (
                    <SelectItem key={row.id} value={String(row.id)}>
                        {row.nama}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}

export default JabatanSearchBuilder;