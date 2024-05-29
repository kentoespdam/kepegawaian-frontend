"use client";
import type { JenisKeahlian } from "@_types/master/jenis_keahlian";
import AlertBuilder from "@components/builder/alert";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { LoadingButton } from "@components/ui/loading-button";
import { SaveIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { saveJenisKeahlian } from "./action";

type JenisKeahlianFormComponent = {
	data?: JenisKeahlian;
};
const JenisKeahlianFormComponent = ({ data }: JenisKeahlianFormComponent) => {
	const [state, action] = useFormState(saveJenisKeahlian, null);
	const { push } = useRouter();
	const cancelForm = () => push("/master/jenis_keahlian");

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
					<Label htmlFor="nama">Nama Keahlian</Label>
					<Input
						id="nama"
						name="nama"
						placeholder="Nama Keahlian"
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

export default JenisKeahlianFormComponent;
