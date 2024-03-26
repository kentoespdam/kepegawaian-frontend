"use client";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { CustomColumnDef } from "@tipes/index";
import { Level } from "@tipes/master/level";
import {
	ReadonlyURLSearchParams,
	usePathname,
	useRouter,
	useSearchParams,
} from "next/navigation";
import LevelSearchBuilder from "./levelSearch";

type SearchComponentProps = {
	col: CustomColumnDef;
	searchParams: ReadonlyURLSearchParams;
	levels?: Level[];
};
const SearchComponent = ({
	col,
	searchParams,
	levels,
}: SearchComponentProps) => {
	if (!col.search) return null;

	switch (col.searchType) {
		case "level": {
			const levelId = searchParams.get("levelId");
			return !levels ? null : (
				<div className="w-52">
					<LevelSearchBuilder
						levels={levels}
						levelId={levelId === null ? "" : levelId}
					/>
				</div>
			);
		}
		default:
			return (
				<div>
					<Input
						name={col.id}
						placeholder={`Search for ${col.label}...`}
						defaultValue={
							searchParams.get(col.id) === null
								? ""
								: String(searchParams.get(col.id))
						}
					/>
				</div>
			);
	}
};

type SearchBuilderProps = {
	columns: CustomColumnDef[];
	levels?: Level[];
};
const SearchBuilder = ({ columns, levels }: SearchBuilderProps) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const doSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const formParams = [...formData.entries()]
			.map((e) =>
				e[1] !== ""
					? `${encodeURIComponent(e[0])}=${encodeURIComponent(String(e[1]))}`
					: null,
			)
			.join("&");
		const params = new URLSearchParams(formParams);
		router.push(`${pathname}?${params.toString()}`);
	};

	const clearSearch = () => {
		const params = new URLSearchParams();
		router.push(`${pathname}?${params.toString()}`);
	};

	return (
		<form onSubmit={doSearch}>
			<div className="flex flex-row justify-start border-b gap-2">
				{columns.map((column) => (
					<SearchComponent
						key={column.id}
						col={column}
						searchParams={searchParams}
						levels={levels}
					/>
				))}
				<Button variant="outline" type="reset" onClick={clearSearch}>
					Clear
				</Button>
				<Button variant="outline" type="submit">
					Cari
				</Button>
			</div>
		</form>
	);
};

export default SearchBuilder;
