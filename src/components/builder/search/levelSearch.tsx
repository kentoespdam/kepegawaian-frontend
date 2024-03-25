import { getListLevel } from "@app/master/level/action";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@components/ui/select";

const LevelSearchBuilder = async ({ levelId }: { levelId: number }) => {
	const levels = await getListLevel("");
	return (
		<Select name="levelId" defaultValue={String(levelId)}>
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
	);
};

export default LevelSearchBuilder;
