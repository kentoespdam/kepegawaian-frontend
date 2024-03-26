"use client";

import { useTheme } from "next-themes";
import {
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuPortal,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
} from "@components/ui/dropdown-menu";
import { SunIcon } from "@radix-ui/react-icons";
import { MoonIcon } from "@radix-ui/react-icons";

const ThemeButton = () => {
	const { setTheme } = useTheme();

	return (
		<DropdownMenuGroup>
			<DropdownMenuSub>
				<DropdownMenuSubTrigger className="cursor-pointer">
					<SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="ml-3">Toggle Theme</span>
				</DropdownMenuSubTrigger>
				<DropdownMenuPortal>
					<DropdownMenuSubContent>
						<DropdownMenuItem
							className="cursor-pointer"
							onClick={() => setTheme("light")}
						>
							<SunIcon className="mr-2 h-4 w-4" />
							<span>Light</span>
						</DropdownMenuItem>
						<DropdownMenuItem
							className="cursor-pointer"
							onClick={() => setTheme("dark")}
						>
							<MoonIcon className="mr-2 h-4 w-4" />
							<span>Dark</span>
						</DropdownMenuItem>
					</DropdownMenuSubContent>
				</DropdownMenuPortal>
			</DropdownMenuSub>
		</DropdownMenuGroup>
	);
};

export default ThemeButton;
