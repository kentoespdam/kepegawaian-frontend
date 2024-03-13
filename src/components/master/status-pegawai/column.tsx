"use client"
import { StatusPegawai } from "@tipes/master/status-pegawai";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Button } from "@components/ui/button";
import { DeleteIcon, PencilIcon, RecycleIcon, XCircleIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip";
import { CaretSortIcon } from "@radix-ui/react-icons";

const columnHelper = createColumnHelper<StatusPegawai>();

export const statusPegawaiColumns: ColumnDef<StatusPegawai>[] = [
    {
        id: "urut",
        header: "No",
        cell: ({ row }) => row.index + 1,
    },
    {
        accessorKey: "nama",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Email
                <CaretSortIcon className="ml-2 h-4 w-4" />
              </Button>
            )
          },
    },
    {
        accessorKey: "id",
        header: "Aksi",
        cell: ({ row }) => {
            console.log(row.id)
            return (
                <TooltipProvider>
                    <div className="flex flex-row gap-2 justify-start">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="sm" className="text-destructive h-6 w-6 p-0">
                                    <XCircleIcon className="h-5 w-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent className="bg-destructive text-destructive-foreground">
                                <p>Delete Status Pegawai</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="sm" className="text-warning h-6 w-6 p-0">
                                    <PencilIcon className="h-5 w-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent className="bg-warning text-warning-foreground">
                                <p>Edit Status Pegawai</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </TooltipProvider>
            )
        }
    }
]