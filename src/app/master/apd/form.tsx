"use client"

import type { Apd } from "@_types/master/apd"
import { useFormState } from "react-dom"
import { saveApd } from "./action"
import { useRouter } from "next/navigation"
import { Label } from "@components/ui/label"
import { Input } from "@components/ui/input"
import AlertBuilder from "@components/builder/alert"
import { Button } from "@components/ui/button"
import { LoadingButton } from "@components/ui/loading-button"
import { SaveIcon } from "lucide-react"
import type { ProfesiMini } from "@_types/master/profesi"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"

const ApdFormPage = ({ profesiList, data }: { profesiList: ProfesiMini[] | null, data?: Apd }) => {
    const [state, action] = useFormState(saveApd, null)
    const { push } = useRouter()
    const cancelForm = () => push("/master/apd")

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

            <form className="space-y-4" action={action}>
                <div className="grid w-full items-center gap-1 5">
                    <Label htmlFor="profesiId">Profesi</Label>
                    <Select
                        name="profesiId"
                        defaultValue={data ? String(data.profesi.id) : ""}
                    >
                        <SelectTrigger id="profesiId" aria-required="true">
                            <SelectValue placeholder="Select Profesi" aria-required="true" />
                        </SelectTrigger>
                        <SelectContent>
                            {profesiList?.map((profesi) => (
                                <SelectItem key={profesi.id} value={String(profesi.id)}>
                                    {profesi.nama}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="nama">Nama</Label>
                    <Input
                        id="nama"
                        name="nama"
                        placeholder="Nama APD"
                        defaultValue={data?.nama}
                    />
                </div>
                <div className="flex flex-row justify-end gap-2">
                    <Button variant="destructive" type="button" onClick={cancelForm}>
                        Cancel
                    </Button>
                    <LoadingButton title="Save" icon={<SaveIcon />} />
                    <input type="hidden" name="id" value={data ? data.id : 0} />
                </div>
            </form>
        </>
    )
}

export default ApdFormPage