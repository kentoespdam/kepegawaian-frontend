"use client";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@components/ui/select";
import type { Level } from "@tipes/master/level";

type LevelSearchBuilderProps = {
	levels: Level[];
	levelId: string;
};

const LevelSearchBuilder = ({ levels, levelId }: LevelSearchBuilderProps) => {
	return (
		<Select name="levelId" defaultValue={levelId}>
			<SelectTrigger id="levelId" aria-required="true" className="min-w-full">
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
	);
};

export default LevelSearchBuilder;
