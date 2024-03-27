import { buttonVariants } from "@components/ui/button";
import { Label } from "@components/ui/label";
import { Separator } from "@components/ui/separator";
import { Tooltip, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip";
import { IMenu, menus } from "@lib/index";
import { cn } from "@utils/index";
import Link from "next/link";

const ListBuilder = ({ menu }: { menu: IMenu }) => {
    return menu.type === "group" ? (
        <div className="prose prose-stone text-sm">
            <Label className="font-bold">{menu.name}</Label>
            <Separator />
        </div>
    ) : null
}

const SheetMenuDropdown = () => {
    return (
        <TooltipProvider delayDuration={0}>
            <nav className="grid gap-1 px-2 w-[200px] mt-8">
                {menus.map((item) => (
                    <ListBuilder menu={item} key={`${item.name}-${item.path}`} />
                ))}
            </nav>
        </TooltipProvider>
    );
}

export default SheetMenuDropdown;