"use client";

import type { JenjangPendidikan } from "@_types/master/jenjang_pendidikan";
import AlertBuilder from "@components/builder/alert";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { LoadingButton } from "@components/ui/loading-button";
import { SaveIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { saveJenjangPendidikan } from "./action";

type JenjangPendidikanFormComponentProps = {
	data?: JenjangPendidikan;
};
const JenjangPendidikanFormComponent = ({
	data,
}: JenjangPendidikanFormComponentProps) => {
	const [state, action] = useFormState(saveJenjangPendidikan, null);
	const { push } = useRouter();
	const cancelForm = () => push("/master/jenjang_pendidikan");

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
					<Label htmlFor="nama">Nama Jenjang Pendidikan</Label>
					<Input
						id="nama"
						name="nama"
						placeholder="Nama Jenjang Pendidikan"
						defaultValue={data?.nama}
					/>
				</div>
				<div className="grid w-full items-center gap-1.5">
					<Label htmlFor="nama">Urut</Label>
					<Input
						id="seq"
						name="seq"
						placeholder="Seq"
						defaultValue={data?.seq}
						type="number"
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

export default JenjangPendidikanFormComponent;
