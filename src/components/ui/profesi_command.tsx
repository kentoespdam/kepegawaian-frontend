"use client";
import type { ProfesiMini } from "@_types/master/profesi";
import { cn } from "@utils/index";
import { Check, ChevronsUpDownIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

type ProfesiCommandProps = {
	list: ProfesiMini[];
	id?: number;
};
const ProfesiCommand = (props: ProfesiCommandProps) => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");
	const [profesiId, setProfesiId] = useState(props.id ?? "");

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<input type="hidden" name="profesiId" defaultValue={profesiId} />
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-full justify-between"
				>
					{profesiId
						? props.list.find((item) => item.id === Number(profesiId))?.nama
						: "Pilih Profesi"}
					<ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-full p-0">
				<Command>
					<CommandInput placeholder="Type to search..." />
					<CommandEmpty>No result found.</CommandEmpty>
					<CommandGroup>
						{props.list.map((item) => (
							<CommandItem
								key={item.id}
								value={item.nama}
								onSelect={() => {
									setValue(item.nama);
									setOpen(false);
									setProfesiId(String(item.id));
								}}
							>
								<Check
									className={cn(
										"mr-2 h-4 w-4",
										value === item.nama ? "opacity-100" : "opacity-0",
									)}
								/>
								{item.nama}
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
};

export default ProfesiCommand;
