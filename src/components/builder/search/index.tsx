"use client";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { CustomColumnDef } from "@tipes/index";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type SearchBuilderProps = {
	columns: CustomColumnDef[];
};
const SearchBuilder = ({ columns }: SearchBuilderProps) => {
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

	return (
		<form onSubmit={doSearch}>
			<div className="flex flex-row justify-start border-b">
				{columns.map((column) =>
					column.search ? (
						<div key={column.id}>
							<Input
								name={column.id}
								placeholder={`Search for ${column.label}...`}
								defaultValue={
									searchParams.get(column.id) === null
										? ""
										: String(searchParams.get(column.id))
								}
							/>
						</div>
					) : null,
				)}
				<Button variant="outline">Cari</Button>
			</div>
		</form>
	);
};

export default SearchBuilder;
