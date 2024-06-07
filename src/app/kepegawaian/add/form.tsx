"use client"
import AlertBuilder from "@components/builder/alert";
import { useFormState } from "react-dom";
import { saveBiodata } from "./action";
import BiodataFormComponent from "./biodata-form";
import ButtonActionComponent from "./button-action";
import ReferensiFormComponent from "./referensi-form";


const AddPegawaiForm = () => {
    const [state, action] = useFormState(saveBiodata, null);
    console.log(state)

    return (
        <>
            {state && state.error !== undefined ? (
                <div className="mb-2">
                    {Object.entries(state.error).map(([key, value]) => (
                        <AlertBuilder
                            key={key}
                            message={`${value}`}
                            variant="destructive"
                            untitled
                        />
                    ))}
                </div>
            ) : null}

            <form action={action}>
                <ReferensiFormComponent />
                <BiodataFormComponent />
                <ButtonActionComponent />
            </form>
        </>
    );
}

export default AddPegawaiForm;