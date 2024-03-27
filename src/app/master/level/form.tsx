"use client";

import AlertBuilder from "@components/builder/alert";
import { buttonVariants } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { LoadingButton } from "@components/ui/loading-button";
import type { Level } from "@tipes/master/level";
import { cn } from "@utils/index";
import { SaveIcon } from "lucide-react";
import Link from "next/link";
import { useFormState } from "react-dom";
import { saveLevel } from "./action";

type LevelFormProps = {
	data?: Level;
};
const LevelForm = (props: LevelFormProps) => {
	const { data } = props;
	const [state, action] = useFormState(saveLevel, null);

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
					<Label>Nama</Label>
					<Input name="nama" placeholder="nama level" defaultValue={data?.nama} />
				</div>
				<div className="flex flex-row justify-end gap-2">
					<Link href="/master/level" className={cn(buttonVariants({
						variant: "destructive"
					}))} >
						Cancel
					</Link>
					<LoadingButton title="Save" icon={<SaveIcon />} />
					<input type="hidden" name="id" value={data?.id} />
				</div>
			</form>
		</>
	);
};

export default LevelForm;
