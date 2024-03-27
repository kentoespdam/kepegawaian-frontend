"use client";

import type { Pageable } from "@tipes/index";
import type { StatusPegawai } from "@tipes/master/status-pegawai";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type StatusPegawaiPaginationProps = {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	data: Pageable<any>;
};
const StatusPegawaiPagination = ({ data }: StatusPegawaiPaginationProps) => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()
    
	return <div>
        <Separator/>
    </div>;
};

export default StatusPegawaiPagination;
