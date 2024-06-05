"use client"

import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { saveBiodata } from "../action";
import AlertBuilder from "@components/builder/alert";
import { Label } from "@components/ui/label";
import { Input } from "@components/ui/input";
import { RadioGroup, RadioGroupItem } from "@components/ui/radio-group";
import { JenisKelamin } from "@_types/enums/jenisKelamin";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select";
import { StatusKawin } from "@_types/enums/status_kawin";
import { Button } from "@components/ui/button";
import { LoadingButton } from "@components/ui/loading-button";
import { SaveIcon } from "lucide-react";
import DatePickerComponent from "@components/ui/date-picker";

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

            <form className="grid gap-4" action={action}>
                <div className="grid w-full items-center gap-2">
                    <Label htmlFor="nik">
                        NIK <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="nik"
                        name="nik"
                        placeholder="Nomor Induk Kependudukan"
                        required
                    />
                </div>

                <div className="grid w-full items-center gap-2">
                    <Label htmlFor="nama">
                        Nama Lengkap <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="nama"
                        name="nama"
                        placeholder="Nama Lengkap"
                        required
                    />
                </div>

                <div className="grid w-full items-center gap-2">
                    <Label htmlFor="jenisKelamin">
                        Jenis Kelamin <span className="text-red-500">*</span>
                    </Label>
                    <RadioGroup defaultValue={JenisKelamin.Values.LAKI_LAKI} className="flex flex-row w-full">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value={JenisKelamin.Values.LAKI_LAKI} id={JenisKelamin.Values.LAKI_LAKI} />
                            <Label htmlFor={JenisKelamin.Values.LAKI_LAKI} className="cursor-pointer">{JenisKelamin.Values.LAKI_LAKI}</Label>
                        </div>

                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value={JenisKelamin.Values.PEREMPUAN} id={JenisKelamin.Values.PEREMPUAN} />
                            <Label htmlFor={JenisKelamin.Values.PEREMPUAN} className="cursor-pointer">{JenisKelamin.Values.PEREMPUAN}</Label>
                        </div>
                    </RadioGroup>
                </div>

                <div className="grid w-full items-center gap-2">
                    <Label htmlFor="nama">
                        Tempat Lahir
                    </Label>
                    <Input
                        id="tempatLahir"
                        name="tempatLahir"
                        placeholder="Tempat Lahir"
                        required
                    />
                </div>

                <div className="grid w-full items-center gap-2">
                    <Label htmlFor="nama">
                        Tanggal Lahir
                    </Label>
                    <DatePickerComponent id="tanggalLahir" />
                </div>

                <div className="grid w-full items-center gap-2">
                    <Label htmlFor="jenisKelamin">
                        Jenis Kelamin <span className="text-red-500">*</span>
                    </Label>
                </div>

                <div className="grid w-full items-center gap-2">
                    <Label htmlFor="jenisKelamin">
                        Status Perkawinan <span className="text-red-500">*</span>
                    </Label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Pilih Status Perkawinan" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value={StatusKawin.Values.BELUM_KAWIN}>{StatusKawin.Values.BELUM_KAWIN}</SelectItem>
                                <SelectItem value={StatusKawin.Values.KAWIN}>{StatusKawin.Values.KAWIN}</SelectItem>
                                <SelectItem value={StatusKawin.Values.CERAI_HIDUP}>{StatusKawin.Values.CERAI_HIDUP}</SelectItem>
                                <SelectItem value={StatusKawin.Values.CERAI_MATI}>{StatusKawin.Values.CERAI_MATI}</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex flex-row justify-end gap-2">
                    <Button variant="destructive" type="button" onClick={cancelForm}>
                        Cancel
                    </Button>
                    <LoadingButton title="Save" icon={<SaveIcon />} />
                </div>
            </form>
        </>
    )
}

export default BiodataAddForm;