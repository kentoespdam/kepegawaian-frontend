import { GOLONGAN_DARAH } from "@_types/enums/golongan_darah";
import { Label } from "../label";
import { RadioGroup, RadioGroupItem } from "../radio-group";

type GolonganDarahRadioComponentProps = {
    value?: string
}

const GolonganDarahRadioComponent = (props: GolonganDarahRadioComponentProps) => {
    return (
        <>
            <Label htmlFor="golonganDarah">
                Golongan Darah <span className="text-red-500">*</span>
            </Label>
            <RadioGroup name="golonganDarah" defaultValue={props.value ? props.value : GOLONGAN_DARAH.A} className="flex flex-row w-full">
                {Object.entries(GOLONGAN_DARAH).map(([key, value]) => (
                    <div className="flex items-center space-x-2" key={key}>
                        <RadioGroupItem value={value} id={value} />
                        <Label htmlFor={key} className="cursor-pointer">{value}</Label>
                    </div>
                ))}
            </RadioGroup>
        </>
    );
}

export default GolonganDarahRadioComponent;