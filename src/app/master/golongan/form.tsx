"use client";

import { Golongan } from "@tipes/master/golongan";
import { useFormState } from "react-dom";
import { saveGolongan } from "./action";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import AlertBuilder from "@components/builder/alert";
import { Form, FormField, FormItem, FormLabel } from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { LoadingButton } from "@components/ui/loading-button";
import { SaveIcon } from "lucide-react";

const GolonganForm = ({ data }: { data?: Golongan }) => {
	const [state, action] = useFormState(saveGolongan, null);
	const form = useForm<Golongan>({
		resolver: zodResolver(Golongan),
		defaultValues: {
			id: data ? data.id : 0,
			golongan: data ? data.golongan : "",
			pangkat: data ? data.pangkat : "",
		},
	});

    const {push}=useRouter()

    const cancelForm=()=>{
        form.reset()
        push("/master/golongan")
    }

	return (
		<>
			{state && state.status !== 201 ? (
				<AlertBuilder variant="error" message={String(state.data)} />
			) : null}
			<Form {...form}>
				<form className="space-y-4 md:space-y-6" action={action}>
					<FormField
						control={form.control}
						name="golongan"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Golongan</FormLabel>
								<Input placeholder="golongan" {...field} />
							</FormItem>
						)}
					/>
                    <FormField
						control={form.control}
						name="pangkat"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Pangkat</FormLabel>
								<Input placeholder="pangkat" {...field} />
							</FormItem>
						)}
					/>
					<div className="flex flex-row justify-end gap-2">
						<Button variant="destructive" type="button" onClick={cancelForm}>
							Cancel
						</Button>
						<LoadingButton title="Save" icon={<SaveIcon />} />
						<input type="hidden" name="id" value={form.getValues().id} />
					</div>
				</form>
			</Form>
		</>
	);
};

export default GolonganForm;
