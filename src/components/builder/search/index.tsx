"use client";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { ResetIcon } from "@radix-ui/react-icons";
import type { CustomColumnDef } from "@_types/index";
import type { Jabatan } from "@_types/master/jabatan";
import type { Level } from "@_types/master/level";
import type { Organisasi } from "@_types/master/organisasi";
import {
	usePathname,
	useRouter,
	useSearchParams,
	type ReadonlyURLSearchParams,
} from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import TooltipBuilder from "../tooltip";
import JabatanSearchBuilder from "./jabatanSearch";
import LevelSearchBuilder from "./levelSearch";

type SearchComponentProps = {
	col: CustomColumnDef;
	searchParams: ReadonlyURLSearchParams;
	handleSearch: (k: string, v: unknown) => void
	levels?: Level[];
	organisasis?: Organisasi[]
	jabatans?: Jabatan[]
};
const SearchComponent = ({
	col,
	searchParams,
	handleSearch,
	levels,
	organisasis,
	jabatans
}: SearchComponentProps) => {
	if (!col.search) return null;

	switch (col.searchType) {
		case "level": {
			const levelId = searchParams.get(col.id);
			return !levels ? null : (
				<div className="w-52">
					<LevelSearchBuilder
						col={col}
						list={levels}
						id={levelId}
						handleSearch={handleSearch}
					/>
				</div>
			);
		}
		case "organisasi": {
			const organisasiId = searchParams.get(col.id);
			return !organisasis ? null : (
				<div className="w-52">
					<LevelSearchBuilder
						col={col}
						list={organisasis}
						id={organisasiId}
						handleSearch={handleSearch}
					/>
				</div>
			);
		}
		case "jabatan": {
			const jabatanId = searchParams.get(col.id);
			return !jabatans ? null : (
				<div className="w-52">
					<JabatanSearchBuilder
						col={col}
						list={jabatans}
						id={jabatanId}
						handleSearch={handleSearch}
					/>
				</div>
			);
		}
		case "number": {
			const number = searchParams.get(col.id);
			return (
				<div>
					<Input
						name={col.id}
						placeholder={`Search for ${col.label}...`}
						type="number"
						onChange={(e) => handleSearch(col.id, e.target.value)}
						defaultValue={
							!number ? "" : number
						}
					/>
				</div>
			)
		}
		default: {
			const text = searchParams.get(col.id);
			return (
				<div>
					<Input
						name={col.id}
						placeholder={`Search for ${col.label}...`}
						onChange={(e) => handleSearch(col.id, e.target.value)}
						defaultValue={
							!text ? "" : text
						}
					/>
				</div>
			);
		}
	}
};

type SearchBuilderProps = {
	columns: CustomColumnDef[];
	levels?: Level[];
	organisasis?: Organisasi[]
	jabatans?: Jabatan[]
};
const SearchBuilder = ({ columns, levels, organisasis, jabatans }: SearchBuilderProps) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const doSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const handleSearch = useDebouncedCallback((k: string, v: unknown) => {
		const params = new URLSearchParams(searchParams);
		if (v === "kosong" || v === "")
			params.delete(k)
		else
			if (params.has(k))
				if (v === "kosong" || v === "")
					params.delete(k)
				else
					params.set(k, String(v))
			else
				params.append(k, String(v));
		router.replace(`${pathname}?${params.toString()}`);
	}, 500)

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
						organisasis={organisasis}
						jabatans={jabatans}
						handleSearch={handleSearch}
					/>
				))}

				<TooltipBuilder text="Clear Search" className="bg-destructive text-destructive-foreground">
					<Button variant="outline" type="reset" size="icon" onClick={clearSearch}>
						<ResetIcon className="text-destructive" />
					</Button>
				</TooltipBuilder>
			</div>
		</form>
	);
};

export default SearchBuilder;