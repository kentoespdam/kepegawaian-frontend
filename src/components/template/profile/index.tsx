import { Avatar, AvatarFallback } from "@components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { KeyRoundIcon, LogOutIcon } from "lucide-react";
import ThemeButton from "../topbar/ThemeButton";
import { cookies } from "next/headers";
import { extracNipamFromToken } from "@helpers/index";
import { getCurrentUser } from "@lib/appwrite/user";
import { getEmployeeByNipam } from "@utils/employee";
import EmployeeStateComponent from "./employee-state";
import Image from "next/image";

const ProfileComponent = async () => {
  const cookieList = cookies();
  const nipam = extracNipamFromToken();
  if (!nipam) return null;
  const [user, employee] = await Promise.all([
    await getCurrentUser(cookieList),
    await getEmployeeByNipam(nipam),
  ]);

  return (
    <div className="flex items-center gap-3 py-2">
      <EmployeeStateComponent userAccount={user} employee={employee} />
      <div className="flex flex-col">
        <h3 className="font-medium text-foreground">{user.name}</h3>
        {/* <span>{employee?.position.name}</span> */}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="h-10 w-10 cursor-pointer">
            <Image
              src="https://github.com/shadcn.png"
              alt="Employee Photo"
              loading="lazy"
              fill
            />
            <AvatarFallback>ID</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem className="cursor-pointer hover:bg-accent">
            <KeyRoundIcon className="mr-2 h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
            <span>Change Password</span>
          </DropdownMenuItem>
          <ThemeButton />
          <DropdownMenuItem className="cursor-pointer">
            <LogOutIcon className="mr-2 h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileComponent;
