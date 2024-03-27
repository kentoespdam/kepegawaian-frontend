import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@components/ui/command";
import { SheetClose } from "@components/ui/sheet";
import { type IMenu, menus } from "@lib/index";
import { FaceIcon } from "@radix-ui/react-icons";
import { CalendarIcon, RocketIcon } from "lucide-react";
import Link from "next/link";

type MenuListBuilderProps = {
	menu: IMenu;
};
const MenulistBuilder = (props: MenuListBuilderProps) => {
	return props.menu.type === "group" ? (
		<CommandGroup heading={props.menu.name}>
			{props.menu.subMenu?.length === 0
				? null
				: props.menu.subMenu?.map((menu) => (
						<MenulistBuilder menu={menu} key={`${menu.name}-${menu.path}`} />
					))}
		</CommandGroup>
	) : (
		// <Link href={props.menu.path} className="cursor pointer">
		// <SheetClose asChild>
		<CommandItem>
			{/* className="cursor-pointer gap-2 pl-4"> */}
			{props.menu.icon}
			<span className="ml-2">{props.menu.name}</span>
		</CommandItem>
		// </SheetClose>
		// </Link>
	);
};

const SheetMenuCommand = () => (
	<Command className="rounded-lg border shadow-md text-foreground">
		<CommandInput placeholder="Type to search..." />
		<CommandList className="min-h-full">
			<CommandEmpty>No results found.</CommandEmpty>
			{menus.map((menu) => (
				<MenulistBuilder menu={menu} key={`${menu.name}-${menu.path}`} />
			))}
		</CommandList>
	</Command>
);

export default SheetMenuCommand;
