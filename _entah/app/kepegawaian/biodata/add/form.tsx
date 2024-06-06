"use client"

import AlertBuilder from "@components/builder/alert";
import { Button } from "@components/ui/button";
import AgamaSelectComponent from "@components/ui/form/agama-select";
import DatePickerComponent from "@components/ui/form/date-picker";
import InputTextComponent from "@components/ui/form/input-text";
import JenisKelaminRadioComponent from "@components/ui/form/jenis-kelamin-radio";
import { Label } from "@components/ui/label";
import { LoadingButton } from "@components/ui/loading-button";
import StatusKawinSelectComponent from "@components/ui/form/status-kawin-select";
import { Textarea } from "@components/ui/textarea";
import { CircleXIcon, SaveIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { saveBiodata } from "../action";

const BiodataAddForm = () => {
    const [state, action] = useFormState(saveBiodata, null);
    const { push } = useRouter();
    const cancelForm = () => push("/kepegawaian");
    return (
        <>
            {state && state.error !== undefined ? (
                <div className="mb-2">
                    {Object.entries(state.error).map(([key, value]) => (
                        <AlertBuilder
                            key={key}
                            message={String(value)}
                            variant="destructive"
                            untitled
                        />
                    ))}
                </div>
            ) : null}

            <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                    Biodata
                </legend>
                <form className="grid lg:grid-cols-2 md:grid-cols-2 w-full gap-6" action={action}>
                    <div className="grid items-center gap-2">
                        <InputTextComponent
                            id="nik"
                            label="NIK"
                            required
                        />
                    </div>

                    <div className="grid items-center gap-2">
                        <InputTextComponent
                            id="nama"
                            label="Nama Lengkap"
                            required
                        />
                    </div>

                    <div className="grid items-center gap-2">
                        <JenisKelaminRadioComponent
                            id="jenisKelamin"
                            label="Jenis Kelamin"
                            required
                        />
                    </div>

                    <div className="grid items-center gap-2">
                        <InputTextComponent
                            id="tempatLahir"
                            label="Tempat Lahir"
                            required
                        />
                    </div>

                    <div className="grid items-center gap-2">
                        <Label htmlFor="tanggalLahir">
                            Tanggal Lahir
                        </Label>
                        <DatePickerComponent id="tanggalLahir" />
                    </div>

                    <div className="grid items-center gap-2">
                        <Label htmlFor="alamat">Alamat</Label>
                        <Textarea placeholder="Type your message here." />
                    </div>

                    <div className="grid items-center gap-2">
                        <InputTextComponent
                            id="telp"
                            label="Telp"
                        />
                    </div>

                    <div className="grid items-center gap-2">
                        <AgamaSelectComponent />
                    </div>

                    <div className="grid items-center gap-2">
                        <StatusKawinSelectComponent />
                    </div>

                    <div className="grid items-center gap-2">
                        <Label htmlFor="notes">
                            Notes
                        </Label>
                        <Textarea placeholder="Type your message here." />
                    </div>
                </form>
            </fieldset>

            <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                    Status Pegawai
                </legend>
            </fieldset>

            <div className="flex items-center justify-end gap-2 mt-4 rounded-lg border p-2">
                <Button variant="destructive" type="button" onClick={cancelForm}>
                    <CircleXIcon className="mr-2" />
                    Cancel
                </Button>
                <LoadingButton title="Save" icon={<SaveIcon />} />
            </div>

        </>
    )
}

export default BiodataAddForm;