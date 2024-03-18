"use client";

import { Level } from "@tipes/master/level";
import { saveLevel } from "./action";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import AlertBuilder from "@components/builder/alert";
import { Form, FormField, FormItem, FormLabel } from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Button, LoadingButton } from "@components/ui/button";
import { SaveIcon } from "lucide-react";

type LevelFormProps = {
	data?: Level;
};
const LevelForm = (props: LevelFormProps) => {
	const { data } = props;
	const [state, action] = useFormState(saveLevel, null);
	const form = useForm<Level>({
		resolver: zodResolver(Level),
		defaultValues: {
			id: data ? data.id : 0,
			nama: data ? data.nama : "",
		},
	});
	const router = useRouter();

	const cancelForm = () => {
		form.reset();
		router.push("/");
	};

	return (
		<>
			{state && state.status !== 201 ? (
				<AlertBuilder variant="error" message={String(state.data)} />
			) : null}
			<Form {...form}>
				<form className="space-y-4 md:space-y-6" action={action}>
					<FormField
						control={form.control}
						name="nama"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Nama</FormLabel>
								<Input placeholder="nama level" {...field} />
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

export default LevelForm;
