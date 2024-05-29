import type { CustomColumnDef } from "@_types/index";
import type { ProfesiMini } from "@_types/master/profesi";
import { Button } from "@components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@components/ui/popover";
import { cn } from "@utils/index";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

type ProfesiSearchBuilderProps = {
    col: CustomColumnDef
    list: ProfesiMini[]
    id: string | null
    handleSearch: (k: string, v: unknown) => void
}
const ProfesiSearchBuilder = ({ col, list, id, handleSearch }: ProfesiSearchBuilderProps) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const findValue = list.find((row) => { row.id === Number(id) })
    console.log(value)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between">
                    {value
                        ? list.find((row) => row.nama === value)?.nama.slice(0, 20) + "..."
                        : `Search for ${col.label}`
                    }
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Type to search..." />
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup>
                        {list?.map((row) => (
                            <CommandItem
                                key={row.id}
                                value={row.nama}
                                onSelect={() => {
                                    setValue(row.nama)
                                    handleSearch(col.id, row.id)
                                    setOpen(false)
                                }}>
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        value === row.nama
                                            ? "opacity-100"
                                            : "opacity-0"
                                    )}
                                />
                                {row.nama}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
    // return (
    //     <Select
    //         name={col.id}
    //         value={currentId}
    //         defaultValue={currentId}
    //         onValueChange={(v) => handleSearch(col.id, v)}>
    //         <SelectTrigger>
    //             <SelectValue placeholder={`Search for ${col.label}`} />
    //         </SelectTrigger>
    //         <SelectContent>
    //             <SelectItem value="kosong">Search for {col.label}</SelectItem>
    //             {list?.map((row) => (
    //                 <SelectItem key={row.id} value={String(row.id)}>
    //                     {row.nama}
    //                 </SelectItem>
    //             ))}
    //         </SelectContent>
    //     </Select>
    // );
}

export default ProfesiSearchBuilder;