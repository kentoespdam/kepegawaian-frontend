"use client"

import { StatusPegawai } from "@tipes/master/status-pegawai";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel } from "@components/ui/form";
import { Input } from "@components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, LoadingButton } from "@components/ui/button";
import { BanIcon, SaveIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { StatusPegawaiSchema } from "./schema";
import { saveStatusPegawai } from "./action";
import { toast } from "@components/ui/use-toast";


type StatusPegawaiFormProps = {
    data?: StatusPegawai
}
const StatusPegawaiForm = ({ data }: StatusPegawaiFormProps) => {
    const [state, action] = useFormState(saveStatusPegawai, null)
    const form = useForm<StatusPegawaiSchema>({
        resolver: zodResolver(StatusPegawaiSchema),
        defaultValues: {
            nama: ""
        }
    })
    const router = useRouter()

    function cancelForm() {
        form.reset()
        router.push("/master/status-pegawai")
    }

    if (state?.status === 201)
        router.push("/master/status-pegawai")

    return (
        <>
            <Form {...form}>
                <form className="space-y-4 md:space-y-6" action={action}>
                    <FormField
                        control={form.control}
                        name="nama"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nama</FormLabel>
                                <Input placeholder="nama status pegawai" {...field} />
                            </FormItem>
                        )} />
                    <div className="flex flex-row justify-end gap-2">
                        <Button variant="destructive" type="button" onClick={cancelForm}>
                            <BanIcon className="mr-2" /> Cancel
                        </Button>
                        <LoadingButton title="Save" icon={<SaveIcon />} />
                    </div>
                </form>
            </Form>
        </>
    );
}

export default StatusPegawaiForm;