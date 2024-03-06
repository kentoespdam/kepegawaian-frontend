import { Button } from "@components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@components/ui/sheet";
import { LayoutDashboardIcon } from "lucide-react";
import SheetMenuCommand from "./menu-command";

const MenuSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <LayoutDashboardIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-fit p-0">
        <SheetMenuCommand />
      </SheetContent>
    </Sheet>
  );
};

export default MenuSheet;
