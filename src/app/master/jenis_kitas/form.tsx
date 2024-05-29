"use client";

import type { JenisKitas } from "@_types/master/jenis_kitas";
import { useFormState } from "react-dom";
import { saveJenisKitas } from "./action";
import { useRouter } from "next/navigation";
import AlertBuilder from "@components/builder/alert";
import { Label } from "@components/ui/label";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { LoadingButton } from "@components/ui/loading-button";
import { SaveIcon } from "lucide-react";

type JenisKitasFormComponentProps = {
	data?: JenisKitas;
};
const JenisKitasFormComponent = ({ data }: JenisKitasFormComponentProps) => {
	const [state, action] = useFormState(saveJenisKitas, null);
	const { push } = useRouter();
	const cancelForm = () => push("/master/jenis_kitas");

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
				<div className="grid w-full items-center gap-1.5">
					<Label htmlFor="nama">Jenis Kartu</Label>
					<Input
						id="nama"
						name="nama"
						placeholder="Jenis Kartu"
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
	);
};

export default JenisKitasFormComponent;
