"use client"
import AlertBuilder from "@components/builder/alert";
import { LoadingButton } from "@components/builder/loading-button";
import { buttonVariants } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/ui/select';
import type { Jabatan } from "@_types/master/jabatan";
import type { Level } from "@_types/master/level";
import type { Organisasi } from "@_types/master/organisasi";
import { cn } from "@utils/index";
import { SaveIcon } from "lucide-react";
import Link from "next/link";
import { useFormState } from "react-dom";
import { saveJabatan } from "./action";

type JabatanFormComponentProps = {
    jabatans: Jabatan[] | null,
    organisasis: Organisasi[] | null,
    levels: Level[] | null,
    data?: Jabatan
}
const JabatanFormComponent = ({ jabatans, organisasis, levels, data }: JabatanFormComponentProps) => {
    const [state, action] = useFormState(saveJabatan, null);

    const _jabatanId = data?.jabatan ? String(data.jabatan.id) : ""
    const _organisasiId = data?.organisasi ? String(data.organisasi.id) : ""
    const _levelId = data?.level ? String(data.level.id) : ""

    return (
        <>
            {state && state.error !== undefined ? (
                <div className="mb-2">
                    {Object.entries(state.error).map(([key, value]) => (
                        <AlertBuilder
                            key={key}
                            message={String(value)}
                            variant="error"
                            untitled
                        />
                    ))}
                </div>
            ) : null}
            <form className="space-y-4 md:space-y-6" action={action}>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="parentId">Induk</Label>
                    <Select name="parentId" defaultValue={_jabatanId}>
                        <SelectTrigger id="parentId">
                            <SelectValue placeholder="Select Induk" />
                        </SelectTrigger>
                        <SelectContent>
                            {jabatans ? jabatans.map((jab) => (
                                <SelectItem key={jab.id} value={String(jab.id)}>{jab.nama}</SelectItem>
                            )) : null}
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="nama">Nama</Label>
                    <Input name="nama" id="nama" defaultValue={data?.nama} placeholder="Nama" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="organisasiId">Organisasi</Label>
                    <Select name="organisasiId" defaultValue={_organisasiId}>
                        <SelectTrigger id="organisasiId">
                            <SelectValue placeholder="Select Organisasi" />
                        </SelectTrigger>
                        <SelectContent>
                            {organisasis ? organisasis.map((row) => (
                                <SelectItem key={row.id} value={String(row.id)}>{row.nama}</SelectItem>
                            )) : null}
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="levelId">Level</Label>
                    <Select name="levelId" defaultValue={_levelId}>
                        <SelectTrigger id="levelId">
                            <SelectValue placeholder="Select Level" />
                        </SelectTrigger>
                        <SelectContent>
                            {levels ? levels.map((row) => (
                                <SelectItem key={row.id} value={String(row.id)}>{row.nama}</SelectItem>
                            )) : null}
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-row justify-end gap-2">
                    <Link href="/master/jabatan" className={cn(buttonVariants({
                        variant: "destructive"
                    }))} >
                        Cancel
                    </Link>
                    <LoadingButton title="Save" icon={<SaveIcon />} />
                    <input type="hidden" name="id" value={data?.id} />
                </div>
            </form>
        </>
    );
}

export default JabatanFormComponent;