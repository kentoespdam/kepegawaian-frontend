"use client"
import { Input } from "../input";
import { Label } from "../label";

type InputTextComponentProps = {
    id: string
    label: string
    required?: boolean
}
const InputTextComponent = (props: InputTextComponentProps) => {
    return (
        <>
            <Label htmlFor={props.id}>
                {props.label} {!props.required ? "" : <span className="text-red-500">*</span>}
            </Label>
            <Input
                id={props.id}
                name={props.id}
                placeholder={props.label}
                required={props.required}
            />
        </>
    );
}

export default InputTextComponent;