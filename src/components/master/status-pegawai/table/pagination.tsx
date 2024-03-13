"use client"
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@components/ui/pagination";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select";
import { Separator } from "@components/ui/separator";
import { Pageable } from "@tipes/index";
import { StatusPegawai } from "@tipes/master/status-pegawai";
import { ChevronFirstIcon, ChevronLastIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


type StatusPegawaiPagination = {
    data: Pageable<StatusPegawai>
}
const StatusPegawaiPagination = ({ data }: StatusPegawaiPagination) => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    function handleSearch(k: string, v: unknown) {
        const params = new URLSearchParams(searchParams)
        params.set(k, String(v))
        replace(`${pathname}?${params.toString()}`)
    }
    return (
        <>
            <Separator />
            <div className="flex flex-row justify-end items-center px-2 gap-2">
                <div className="flex flex-row text-sm items-center gap-2">
                    <div className="text-nowrap">Row per page</div>
                    <Select onValueChange={v => handleSearch("size", v)}>
                        <SelectTrigger className="border-0">
                            <SelectValue placeholder={data.size} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="10">10</SelectItem>
                            <SelectItem value="25">25</SelectItem>
                            <SelectItem value="50">50</SelectItem>
                            <SelectItem value="100">100</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="text-sm">
                    {data.number + 1}-{data.numberOfElements} of {data.totalElements}
                </div>
                <div>
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationLink href="#" disabled={data.first}>
                                    <ChevronFirstIcon className="h-5 w-5" />
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" disabled={data.first}>
                                    <ChevronLeftIcon className="h-5 w-5" />
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" disabled={data.last}>
                                    <ChevronRightIcon className="h-5 w-5" />
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" disabled={data.last}>
                                    <ChevronLastIcon className="h-5 w-5" />
                                </PaginationLink>
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>

            </div >
        </>
    );
}

export default StatusPegawaiPagination;