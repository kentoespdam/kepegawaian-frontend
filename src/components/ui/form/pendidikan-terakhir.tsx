"use client"
import { getListJenjangPendidikan } from "@app/master/jenjang_pendidikan/action";
import { Label } from "../label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../select";
import { useQuery } from "@tanstack/react-query";

const PendidikanTerakhirSelectComponent = () => {

    const query = useQuery({
        queryKey: ["pendidikan-terakhir"],
        queryFn: async () => await getListJenjangPendidikan()
    })

    if (query.isError) return (<div>{query.error.message}</div>)
    if (query.isLoading) return (<div>Loading...</div>)

    return (
        <>
            <Label htmlFor="pendidikanTerakhir">
                Pendidikan Terakhir  <span className="text-red-500">*</span>
            </Label>
            <Select name="pendidikanTerakhir" required>
                <SelectTrigger className="w-full">
                    <SelectValue id="pendidikanTerakhir" placeholder="Pilih Pendidkan Terakhir" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {query.data?.map(item => {
                            return <SelectItem key={item.id} value={String(item.id)}>{item.nama}</SelectItem>;
                        })}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </>
    );
}

export default PendidikanTerakhirSelectComponent;