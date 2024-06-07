import { STATUS_KAWIN } from "@_types/enums/status_kawin";
import { Label } from "../label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../select";

const StatusKawinSelectComponent = () => {
    return (
        <>
            <Label htmlFor="statusKawin">
                Status Perkawinan <span className="text-red-500">*</span>
            </Label>
            <Select name="statusKawin" required>
                <SelectTrigger className="w-full">
                    <SelectValue id="statusKawin" placeholder="Pilih Status Perkawinan" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {STATUS_KAWIN.map(item => (
                            <SelectItem key={item} value={item}>{item}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </>
    );
}

export default StatusKawinSelectComponent;
