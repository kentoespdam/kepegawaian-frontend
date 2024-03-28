"use client";

import AlertBuilder from "@components/builder/alert";
import { Button } from "@components/ui/button";
import { FormItem } from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { LoadingButton } from "@components/ui/loading-button";
import type { Golongan } from "@tipes/master/golongan";
import { SaveIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { saveGolongan } from "./action";

const GolonganForm = ({ data }: { data?: Golongan }) => {
	const [state, action] = useFormState(saveGolongan, null);

	const { push } = useRouter()

	const cancelForm = () => {
		push("/master/golongan")
	}

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
					<Label>Golongan</Label>
					<Input name="golongan" placeholder="golongan"
						defaultValue={data?.golongan} />
				</div>
				<FormItem>
					<Label>Pangkat</Label>
					<Input name="pangkat" placeholder="pangkat"
						defaultValue={data?.pangkat} />
				</FormItem>
				<div className="flex flex-row justify-end gap-2">
					<Button variant="destructive" type="button" onClick={cancelForm}>
						Cancel
					</Button>
					<LoadingButton title="Save" icon={<SaveIcon />} />
					<input type="hidden" name="id" value={data?.id} />
				</div>
			</form>
		</>
	);
};

export default GolonganForm;
