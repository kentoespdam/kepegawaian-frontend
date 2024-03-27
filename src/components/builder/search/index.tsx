"use client";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Tooltip, TooltipProvider } from "@components/ui/tooltip";
import { ResetIcon } from "@radix-ui/react-icons";
import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import type { CustomColumnDef } from "@tipes/index";
import type { Level } from "@tipes/master/level";
import {
	usePathname,
	useRouter,
	useSearchParams,
	type ReadonlyURLSearchParams,
} from "next/navigation";
import LevelSearchBuilder from "./levelSearch";
import { SearchIcon } from "lucide-react";
import TooltipBuilder from "../tooltip";

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
		<form onSubmit={doSearch} className="mb-2">
			<div className="flex flex-row justify-start gap-2">
				{columns.map((column) => (
					<SearchComponent
						key={column.id}
						col={column}
						searchParams={searchParams}
						levels={levels}
					/>
				))}
				<TooltipBuilder text="Clear Search" className="bg-destructive text-destructive-foreground">
					<Button variant="outline" type="reset" size="icon" onClick={clearSearch}>
						<ResetIcon className="text-destructive" />
					</Button>
				</TooltipBuilder>
				<TooltipBuilder text="Search Data">
					<Button variant="outline" type="submit" size="icon">
						<SearchIcon className="w-4 h-4 text-primary" />
					</Button>
				</TooltipBuilder>
			</div>
		</form>
	);
};

export default SearchBuilder;
