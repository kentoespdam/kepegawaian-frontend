import { Label } from "@components/ui/label";
import { RadioGroup, RadioGroupItem } from "@components/ui/radio-group";

const ReferensiFormComponent = () => {
    return (
        <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">
                Referensi Profil
            </legend>
            <div className="grid items-center gap-2">
                <Label htmlFor="referensiProfil">
                    Golongan Darah <span className="text-red-500">*</span>
                </Label>
                <RadioGroup
                    name="referensiProfil"
                    defaultValue="biodata" className="flex flex-row w-full">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="biodata" id="biodata" />
                        <Label htmlFor="biodata" className="cursor-pointer">Biodata</Label>
                    </div>
                </RadioGroup>
            </div>
        </fieldset>
    );
}

export default ReferensiFormComponent;