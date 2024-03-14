import TableHeadBuilder from "@components/builder/table/head";
import StatusPegawaiPagination from "@components/master/status-pegawai/table/pagination";
import StatusPegawaiTableBody from "@components/master/status-pegawai/table/body";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Table } from "@components/ui/table";
import { Pageable } from "@tipes/index";
import { StatusPegawai, statusPegawaiTableColumns } from "@tipes/master/status-pegawai";
import { API_URL } from "@utils/index";
import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
import { setAuthorizeHeader } from "@helpers/index";
import { Button } from "@components/ui/button";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip";
import TooltipBuilder from "@components/builder/tooltip";

const getData = async (searchParams: string): Promise<Pageable<StatusPegawai> | null> => {
    try {
        const cookieList = cookies()
        const headers = setAuthorizeHeader(cookieList)
        const { data, status } = await axios.get(`${API_URL}/master/status-pegawai?${searchParams}`, {
            headers: headers
        })

        return data.data
    } catch (e) {
        const err = e as unknown as AxiosError
        console.log(err.response)
        return null
    }
}

const StatusPegawaiPage = async ({ searchParams }: { searchParams: Record<string, string> }) => {
    const urlSearchParams = new URLSearchParams(searchParams)
    const data = await getData(urlSearchParams.toString())
    if (!data) return <>No Content</>

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-bold text-md flex flex-row justify-between items-center">
                    <div>Status Pegawai</div>
                    <div>
                        <TooltipBuilder text="Add Status pegawai" className="bg-primary">
                            <Link href="/master/status-pegawai/add">
                                <Button variant="ghost" className="p-0 w-6 h-6 rounded-full text-primary hover:bg-primary hover:text-primary-foreground" >
                                    <CirclePlus />
                                </Button>
                            </Link>
                        </TooltipBuilder>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="rounded-md border">
                    <Table>
                        <TableHeadBuilder columns={statusPegawaiTableColumns} />
                        <StatusPegawaiTableBody data={data} />
                    </Table>
                    <StatusPegawaiPagination data={data} />
                </div>
            </CardContent>
        </Card>
    );
}

export default StatusPegawaiPage;