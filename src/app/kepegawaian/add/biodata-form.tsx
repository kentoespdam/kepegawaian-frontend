import AgamaSelectComponent from "@components/ui/form/agama-select";
import DatePickerComponent from "@components/ui/form/date-picker";
import GolonganDarahRadioComponent from "@components/ui/form/golongan-darah-radio";
import InputTextComponent from "@components/ui/form/input-text";
import JenisKelaminRadioComponent from "@components/ui/form/jenis-kelamin-radio";
import PendidikanTerakhirSelectComponent from "@components/ui/form/pendidikan-terakhir";
import StatusKawinSelectComponent from "@components/ui/form/status-kawin-select";
import { Label } from "@components/ui/label";
import { Textarea } from "@components/ui/textarea";

const BiodataFormComponent = () => {
    return (
        <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">
                Biodata
            </legend>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 w-full gap-6" >
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
                    <JenisKelaminRadioComponent />
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
                    <Textarea id="alamat" name="alamat" placeholder="Type your message here." />
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
                    <InputTextComponent
                        id="ibuKandung"
                        label="Ibu Kandung"
                        required
                    />
                </div>

                <div className="grid items-center gap-2">
                    <PendidikanTerakhirSelectComponent />
                </div>

                <div className="grid items-center gap-2">
                    <GolonganDarahRadioComponent />
                </div>

                <div className="grid items-center gap-2">
                    <StatusKawinSelectComponent />
                </div>

                <div className="grid items-center gap-2">
                    <Label htmlFor="notes">
                        Notes
                    </Label>
                    <Textarea id="notes" name="notes" placeholder="Type your message here." />
                </div>
            </div>
        </fieldset>
    );
}

export default BiodataFormComponent;