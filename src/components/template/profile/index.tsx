import { Avatar, AvatarFallback } from "@components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { KeyRoundIcon, LogOutIcon } from "lucide-react";
import { cookies } from "next/headers";
import Image from "next/image";
import ThemeButton from "../topbar/theme-button";
import { extracNipamFromToken } from "@helpers/index";
import { getCurrentUser } from "@lib/appwrite/user";
import { getEmployeeByNipam } from "@utils/employee";
import EmployeeStateComponent from "./employee-state";

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
			<div className="hidden md:block lg:block">
				<div className="flex flex-col">
					<h6 className="font-medium text-foreground">{user.name}</h6>
					{/* <span>{employee?.position.name}</span> */}
				</div>
			</div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Avatar className="h-10 w-10 cursor-pointer">
						<Image
							src="https://github.com/shadcn.png"
							alt="Employee Photo"
							loading="lazy"
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
						<AvatarFallback>ID</AvatarFallback>
					</Avatar>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuLabel>{user.name}</DropdownMenuLabel>
					<DropdownMenuSeparator />
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
