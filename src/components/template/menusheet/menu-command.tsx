import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@components/ui/command";
import { IMenu, menus } from "@lib/index";
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
    <Link href={props.menu.path} className="cursor pointer">
      <CommandItem className="cursor-pointer gap-2 ml-4">
        {props.menu.icon}
        {props.menu.name}
      </CommandItem>
    </Link>
  );
};

const SheetMenuCommand = () => {
  return (
    <Command>
      <CommandInput placeholder="Type to search..." />
      <CommandList className="min-h-full">
        <CommandEmpty>No results found.</CommandEmpty>
        {menus.map((menu) => (
          <MenulistBuilder menu={menu} key={`${menu.name}-${menu.path}`} />
        ))}
      </CommandList>
    </Command>
  );
};

export default SheetMenuCommand;
