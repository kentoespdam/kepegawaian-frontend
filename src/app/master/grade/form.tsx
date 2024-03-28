"use client";

import AlertBuilder from "@components/builder/alert";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { LoadingButton } from "@components/ui/loading-button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@components/ui/select";
import type { Grade } from "@tipes/master/grade";
import type { Level } from "@tipes/master/level";
import { SaveIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { saveGrade } from "./action";

const GradeFormComponent = ({
	levels,
	data,
}: { levels: Level[] | null; data?: Grade }) => {
	const { push } = useRouter();
	const [state, action] = useFormState(saveGrade, null);

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
			<form className="space-y-4" action={action}>
				<div className="grid w-full items-center gap-1.5">
					<Label htmlFor="levelId">Level</Label>
					<Select name="levelId" defaultValue={data ? String(data.level.id) : ""}>
						<SelectTrigger id="levelId" aria-required="true">
							<SelectValue placeholder="Select Level" aria-required="true" />
						</SelectTrigger>
						<SelectContent>
							{levels?.map((level) => (
								<SelectItem key={level.id} value={String(level.id)}>
									{level.nama}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				<div className="grid w-full items-center gap-1.5">
					<Label htmlFor="grade">Grade</Label>
					<Input
						id="grade"
						name="grade"
						type="number"
						placeholder="grade"
						defaultValue={data?.grade}
						required
					/>
				</div>

				<div className="grid w-full items-center gap-1.5">
					<Label htmlFor="tukin">Tukin</Label>
					<Input
						id="tukin"
						name="tukin"
						type="number"
						placeholder="tukin"
						defaultValue={data?.tukin}
						required
					/>
				</div>

				<div className="flex flex-row justify-end gap-2">
					<Button
						variant="destructive"
						type="button"
						onClick={() => push("/master/grade")}
					>
						Cancel
					</Button>
					<LoadingButton type="submit" title="Save" icon={<SaveIcon />} />
					<input type="hidden" name="id" value={data?.id} />
				</div>
			</form>
		</>
	);
};

export default GradeFormComponent;
