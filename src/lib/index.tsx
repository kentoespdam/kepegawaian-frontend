import { USER_ROLE, UserRole } from "@tipes/index";
import {
	BarcodeIcon,
	BoxesIcon,
	GitCompareArrowsIcon,
	HandshakeIcon,
	HomeIcon,
	NavigationIcon,
	RadicalIcon,
	ShovelIcon,
	SignalIcon,
} from "lucide-react";
import { z } from "zod";

export type ChildrenNode = {
	children: React.ReactNode;
};

const defaultIconClassName = "w-3 h-3";

const MenuType = z.enum(["group", "item"]);
type MenuType = z.infer<typeof MenuType>;

export const IMenu = z.object({
	path: z.string(),
	name: z.string(),
	role: UserRole,
	type: MenuType.optional(),
});

export type IMenu = z.infer<typeof IMenu> & {
	icon?: React.ReactElement;
	subMenu?: IMenu[];
};

export const menus: IMenu[] = [
	{
		path: "#",
		name: "Navigation",
		type: "group",
		role: "USER",
		subMenu: [
			{
				path: "/",
				name: "Dashboard",
				icon: <HomeIcon className={defaultIconClassName} />,
				role: "USER",
			},
		],
	},
	{
		path: "#",
		name: "Master",
		type: "group",
		role: "ADMIN",
		subMenu: [
			{
				path: "/master/status-pegawai",
				name: "Status Pegawai",
				icon: <BoxesIcon className={defaultIconClassName} />,
				role: USER_ROLE.ADMIN,
			},
			{
				path: "/master/pangkat",
				name: "Pangkat",
				icon: <HandshakeIcon className={defaultIconClassName} />,
				role: USER_ROLE.ADMIN,
			},
			{
				path: "/master/golongan",
				name: "Golongan",
				icon: <BarcodeIcon className={defaultIconClassName} />,
				role: USER_ROLE.ADMIN,
			},
			{
				path: "/master/level",
				name: "Level",
				icon: <RadicalIcon className={defaultIconClassName} />,
				role: USER_ROLE.ADMIN,
			},
			{
				path: "/master/grade",
				name: "Grade",
				icon: <NavigationIcon className={defaultIconClassName} />,
				role: USER_ROLE.ADMIN,
			},
			{
				path: "/master/profesi",
				name: "Profesi",
				icon: <ShovelIcon className={defaultIconClassName} />,
				role: USER_ROLE.ADMIN,
			},
			{
				path: "/master/organisasi",
				name: "Organisasi",
				icon: <GitCompareArrowsIcon className={defaultIconClassName} />,
				role: USER_ROLE.ADMIN,
			},
			{
				path: "/master/jabatan",
				name: "Jabatan",
				icon: <SignalIcon className={defaultIconClassName} />,
				role: USER_ROLE.ADMIN,
			},
		],
	},
];
