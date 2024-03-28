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
	levelId: string | null;
	handleSearch: (k: string, v: unknown) => void
};

const LevelSearchBuilder = ({ levels, levelId, handleSearch }: LevelSearchBuilderProps) => {
	const currentId = !levelId ? "kosong" : levelId
	return (
		<Select name="levelId" value={currentId} defaultValue={currentId} onValueChange={(v) => handleSearch("levelId", v)}>
			<SelectTrigger id="levelId" aria-required="true" className="min-w-full">
				<SelectValue placeholder="Select Level"/>
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="kosong">Select Level</SelectItem>
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
