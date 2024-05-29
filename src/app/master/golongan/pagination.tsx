"use client";

import { Button } from "@components/ui/button";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
} from "@components/ui/pagination";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@components/ui/select";
import { Separator } from "@components/ui/separator";
import type { Pageable } from "@_types/index";
import type { Golongan } from "@_types/master/golongan";
import {
	ChevronFirstIcon,
	ChevronLastIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const GolonganPagination = ({ data }: { data: Pageable<Golongan> | null }) => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { push } = useRouter();

	function handleSearch(k: string, v: unknown) {
		if (k === "size") {
			push(`${pathname}?size=${v}`);
			return;
		}
		const params = new URLSearchParams(searchParams);
		params.has(k) ? params.set(k, String(v)) : params.append(k, String(v));

		console.log(params.toString());
		push(`${pathname}?${params.toString()}`);
	}

	return (
		<>
			<Separator />
			<div className="flex flex-row justify-end items-center px-2 gap-2">
				<div className="flex flex-row text-sm items-center gap-2">
					<div className="text-nowrap">Row per page</div>
					<Select onValueChange={(v) => handleSearch("size", v)}>
						<SelectTrigger className="border-0">
							<SelectValue placeholder={data ? data.size : 10} />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="10">10</SelectItem>
							<SelectItem value="25">25</SelectItem>
							<SelectItem value="50">50</SelectItem>
							<SelectItem value="100">100</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="text-sm">
					{data ? data.number + 1 : 0}-{data ? data.numberOfElements : 0} of{" "}
					{data ? data.totalElements : 0}
				</div>
				<div>
					<Pagination>
						<PaginationContent>
							<PaginationItem>
								<Button
									variant="ghost"
									size="icon"
									onClick={() => handleSearch("page", 1)}
									disabled={data?.first}
								>
									<ChevronFirstIcon className="h-5 w-5" />
								</Button>
							</PaginationItem>
							<PaginationItem>
								<Button
									variant="ghost"
									size="icon"
									onClick={() =>
										handleSearch("page", data ? data.number - 1 : 0)
									}
									disabled={data?.first}
								>
									<ChevronLeftIcon className="h-5 w-5" />
								</Button>
							</PaginationItem>
							<PaginationItem>
								<Button
									variant="ghost"
									size="icon"
									onClick={() =>
										handleSearch("page", data ? data.number + 1 : 0)
									}
									disabled={data?.last}
								>
									<ChevronRightIcon className="h-5 w-5" />
								</Button>
							</PaginationItem>
							<PaginationItem>
								<Button
									variant="ghost"
									size="icon"
									onClick={() =>
										handleSearch("page", data ? data.totalPages : 0)
									}
									disabled={data?.last}
								>
									<ChevronLastIcon className="h-5 w-5" />
								</Button>
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				</div>
			</div>
		</>
	);
};

export default GolonganPagination;
