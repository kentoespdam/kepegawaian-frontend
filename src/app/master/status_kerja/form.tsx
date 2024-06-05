"use client";

import type { StatusKerja } from "@_types/master/status_kerja";
import AlertBuilder from "@components/builder/alert";
import { buttonVariants } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { LoadingButton } from "@components/ui/loading-button";
import { cn } from "@utils/index";
import { SaveIcon } from "lucide-react";
import Link from "next/link";
import { useFormState } from "react-dom";
import { saveStatusKerja } from "./action";

type StatusKerjaFormProps = {
	data?: StatusKerja;
};
const StatusKerjaForm = (props: StatusKerjaFormProps) => {
	const { data } = props;
	const [state, action] = useFormState(saveStatusKerja, null);

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
			<form className="space-y-4 md:space-y-6" action={action}>
				<div className="grid w-full items-center gap-1.5">
					<Label>Status Kerja</Label>
					<Input
						name="nama"
						placeholder="Status Kerja"
						defaultValue={data?.nama}
					/>
				</div>
				<div className="flex flex-row justify-end gap-2">
					<Link
						href="/master/status_kerja"
						className={cn(
							buttonVariants({
								variant: "destructive",
							}),
						)}
					>
						Cancel
					</Link>
					<LoadingButton title="Save" icon={<SaveIcon />} />
					<input type="hidden" name="id" value={data?.id} />
				</div>
			</form>
		</>
	);
};

export default StatusKerjaForm;
