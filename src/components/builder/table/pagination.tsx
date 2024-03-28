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
import type { Pageable } from "@tipes/index";
import {
    ChevronFirstIcon,
    ChevronLastIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type PaginationBuilderProps = {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    data: Pageable<any> | null;
};
const PaginationBuilder = ({ data }: PaginationBuilderProps) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const number = data ? data.number : 0
    const numberOfElements = data ? data.numberOfElements : 0
    const totalElements = data ? data.totalElements : 0
    const totalPages = data ? data.totalPages : 0

    const handleSearch = (k: string, v: unknown) => {
        if (k === "size") {
            router.push(`${pathname}?size=${v}`);
            return;
        }
        const params = new URLSearchParams(searchParams);
        params.has(k) ? params.set(k, String(v)) : params.append(k, String(v));

        router.push(`${pathname}?${params.toString()}`);
    };

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
                    {number + 1}-{numberOfElements} of {totalElements}
                </div>
                <div>
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleSearch("page", 0)}
                                    disabled={data?.first}
                                >
                                    <ChevronFirstIcon className="h-5 w-5" />
                                </Button>
                            </PaginationItem>
                            <PaginationItem>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleSearch("page", number - 1)}
                                    disabled={data?.first}
                                >
                                    <ChevronLeftIcon className="h-5 w-5" />
                                </Button>
                            </PaginationItem>
                            <PaginationItem>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleSearch("page", number + 1)}
                                    disabled={data?.last}
                                >
                                    <ChevronRightIcon className="h-5 w-5" />
                                </Button>
                            </PaginationItem>
                            <PaginationItem>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleSearch("page", totalPages)}
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

export default PaginationBuilder;