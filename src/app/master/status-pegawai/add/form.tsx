"use client";

import AlertBuilder from "@components/builder/alert";
import { Button, LoadingButton } from "@components/ui/button";
import { Form, FormField, FormItem, FormLabel } from "@components/ui/form";
import { Input } from "@components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { StatusPegawai } from "@tipes/master/status-pegawai";
import { BanIcon, SaveIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { saveStatusPegawai } from "../action";
import { StatusPegawaiPrevState, StatusPegawaiSchema } from "../schema";

type StatusPegawaiFormProps = {
	data?: StatusPegawai;
};
const StatusPegawaiForm = (props: StatusPegawaiFormProps) => {
	const { data } = props;
	const [state, action] = useFormState(saveStatusPegawai, null);
	const form = useForm<StatusPegawaiSchema>({
		resolver: zodResolver(StatusPegawaiSchema),
		defaultValues: {
			id: data ? data.id : 0,
			nama: data ? data.nama : "",
		},
	});
	const router = useRouter();

	function cancelForm() {
		form.reset();
		router.push("/master/status-pegawai");
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
						name="nama"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Nama</FormLabel>
								<Input placeholder="nama status pegawai" {...field} />
							</FormItem>
						)}
					/>
					<div className="flex flex-row justify-end gap-2">
						<Button variant="destructive" type="button" onClick={cancelForm}>
							<BanIcon className="mr-2" /> Cancel
						</Button>
						<LoadingButton title="Save" icon={<SaveIcon />} />
						<input type="hidden" name="id" value={form.getValues().id} />
					</div>
				</form>
			</Form>
		</>
	);
};

export default StatusPegawaiForm;
