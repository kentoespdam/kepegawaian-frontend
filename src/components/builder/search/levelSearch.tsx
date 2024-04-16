import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@components/ui/select";
import type { CustomColumnDef } from "@_types/index";
import type { Level } from "@_types/master/level";

type LevelSearchBuilderProps = {
	col: CustomColumnDef
	list: Level[];
	id: string | null;
	handleSearch: (k: string, v: unknown) => void
};

const LevelSearchBuilder = ({ col, list: levels, id, handleSearch }: LevelSearchBuilderProps) => {
	const currentId = !id ? "kosong" : id
	
	return (
		<Select name={col.id} value={currentId} defaultValue={currentId} onValueChange={(v) => handleSearch(col.id, v)}>
			<SelectTrigger id={col.id} aria-required="true" className="min-w-full">
				<SelectValue placeholder={`Search For ${col.label}`} />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="kosong">{`Search For ${col.label}`}</SelectItem>
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
