"use client"

import type { Organisasi } from "@tipes/master/organisasi";
import { useFormState } from "react-dom";
import { saveOrganisasi } from "./action";
import { Label } from "@components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select";
import { Input } from "@components/ui/input";
import Link from "next/link";
import { cn } from "@utils/index";
import { buttonVariants } from "@components/ui/button";
import { LoadingButton } from "@components/builder/loading-button";
import { SaveIcon } from "lucide-react";
import AlertBuilder from "@components/builder/alert";

const OrganisasiFormComponent = ({ orgParent, data }: { orgParent: Organisasi[] | null, data?: Organisasi }) => {
    const [state, action] = useFormState(saveOrganisasi, null)

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
                    <Select name="parentId" defaultValue={data ? String(data.organisasi?.id) : ""}>
                        <SelectTrigger id="parentId" aria-required="true">
                            <SelectValue placeholder="Select Induk" aria-required="true" />
                        </SelectTrigger>
                        <SelectContent>
                            {orgParent ? orgParent.map((org) => (
                                <SelectItem key={org.id} value={String(org.id)}>{org.nama}</SelectItem>
                            )) : null}
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="nama">Nama</Label>
                    <Input id="nama" name="nama" placeholder="nama organisasi" defaultValue={data?.nama} />
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="levelOrganisasi">Level Organisasi</Label>
                    <Select name="levelOrganisasi" defaultValue={data ? String(data.levelOrganisasi) : ""}>
                        <SelectTrigger id="levelOrganisasi" aria-required="true">
                            <SelectValue placeholder="Select Level Organisasi" aria-required="true" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">Level 1</SelectItem>
                            <SelectItem value="2">Level 2</SelectItem>
                            <SelectItem value="3">Level 3</SelectItem>
                            <SelectItem value="4">Level 4</SelectItem>
                            <SelectItem value="5">Level 5</SelectItem>
                            <SelectItem value="6">Level 6</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-row justify-end gap-2">
                    <Link href="/master/organisasi" className={cn(buttonVariants({
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

export default OrganisasiFormComponent;