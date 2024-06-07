import InputTextComponent from "@components/ui/form/input-text";

const PegawaiFormComponent = () => {
    return (
        <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">
                Kepegawaian
            </legend>
            
            <div className="grid lg:grid-cols-2 md:grid-cols-2 w-full gap-6" >
                <div className="grid items-center gap-2">
                    <InputTextComponent
                        id="nipam"
                        label="NIPAM"
                    />
                </div>
            </div>
        </fieldset>
    );
}

export default PegawaiFormComponent;