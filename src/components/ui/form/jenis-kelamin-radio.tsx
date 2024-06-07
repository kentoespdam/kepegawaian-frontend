import { JenisKelamin } from "@_types/enums/jenisKelamin";
import { Label } from "../label";
import { RadioGroup, RadioGroupItem } from "../radio-group";

type JenisKelaminRadioComponentProps = {
    value?: string
}
const JenisKelaminRadioComponent = (props: JenisKelaminRadioComponentProps) => {
    return (
        <>
            <Label htmlFor="jenisKelamin">
                Jenis Kelamin <span className="text-red-500">*</span>
            </Label>
            <RadioGroup name="jenisKelamin" defaultValue={props.value ? props.value : JenisKelamin.Values.LAKI_LAKI} className="flex flex-row w-full">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value={JenisKelamin.Values.LAKI_LAKI} id={JenisKelamin.Values.LAKI_LAKI} />
                    <Label htmlFor={JenisKelamin.Values.LAKI_LAKI} className="cursor-pointer">{JenisKelamin.Values.LAKI_LAKI}</Label>
                </div>

                <div className="flex items-center space-x-2">
                    <RadioGroupItem value={JenisKelamin.Values.PEREMPUAN} id={JenisKelamin.Values.PEREMPUAN} />
                    <Label htmlFor={JenisKelamin.Values.PEREMPUAN} className="cursor-pointer">{JenisKelamin.Values.PEREMPUAN}</Label>
                </div>
            </RadioGroup>
        </>
    );
}

export default JenisKelaminRadioComponent;