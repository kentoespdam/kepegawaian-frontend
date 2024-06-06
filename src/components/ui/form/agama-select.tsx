import { AGAMA } from "@_types/enums/agama";
import { Label } from "../label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../select";

const AgamaSelectComponent = () => {
    return (
        <>
            <Label htmlFor="agama">
                Agama
            </Label>
            <Select>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih Agama" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {AGAMA.map((agama, index) => {
                            return <SelectItem key={agama} value={String(index)}>{agama}</SelectItem>;
                        })}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </>
    );
}

export default AgamaSelectComponent;