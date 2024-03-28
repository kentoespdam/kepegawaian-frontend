"use client"
import AlertBuilder from "@components/builder/alert";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { LoadingButton } from "@components/ui/loading-button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select";
import type { Level } from "@tipes/master/level";
import type { Profesi } from "@tipes/master/profesi";
import { SaveIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { saveProfesi } from "./action";

type ProfesiFormComponentProps = {
    levels: Level[] | null,
    data?: Profesi,
};
const ProfesiFormComponent = ({ levels, data }: ProfesiFormComponentProps) => {
    const [state, action] = useFormState(saveProfesi, null)
    const { push } = useRouter()

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
                    <Label htmlFor="levelId">Level</Label>
                    <Select name="levelId" defaultValue={data ? String(data.level.id) : ""}>
                        <SelectTrigger id="levelId" aria-required="true">
                            <SelectValue placeholder="Select Level" aria-required="true" />
                        </SelectTrigger>
                        <SelectContent>
                            {levels?.map((level) => (
                                <SelectItem key={level.id} value={String(level.id)}>
                                    {level.nama}
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
                        placeholder="nama"
                        defaultValue={data?.nama}
                        required
                    />
                </div>

                <div className="flex flex-row justify-end gap-2">
                    <Button
                        variant="destructive"
                        type="button"
                        onClick={() => push("/master/profesi")}
                    >
                        Cancel
                    </Button>
                    <LoadingButton type="submit" title="Save" icon={<SaveIcon />} />
                    <input type="hidden" name="id" value={data?.id} />
                </div>
            </form>
        </>
    );
}

export default ProfesiFormComponent;