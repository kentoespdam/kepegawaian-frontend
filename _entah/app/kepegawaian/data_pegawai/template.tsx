import TooltipBuilder from "@components/builder/tooltip";
import { Button } from "@components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import type { ChildrenNode } from "@lib/index";
import {
	ChevronDownIcon,
	PlusCircleIcon,
	RssIcon,
	User,
	UserCheckIcon,
} from "lucide-react";
import Link from "next/link";

const TemplatePegawai = ({ children }: ChildrenNode) => {
	return (
		<div className="flex flex-col sm:gap-4">
			<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
				<div dir="ltr" data-aria-orientation="horizontal">
					<div className="flex items-center gap-2">
						<TooltipBuilder text="Data Pendukung">
							<Link href="#">
								<Button variant="ghost" size="sm" className="h-7 gap-1">
									<RssIcon className="h-3.5 w-3.5" />
									<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
										Data Pendukung
									</span>
								</Button>
							</Link>
						</TooltipBuilder>

						<TooltipBuilder text="Data Kepegawaian">
							<Link href="#">
								<Button variant="ghost" size="sm" className="h-7 gap-1">
									<UserCheckIcon className="h-3.5 w-3.5" />
									<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
										Data Kepegawaian
									</span>
								</Button>
							</Link>
						</TooltipBuilder>

						<DropdownMenu>
							<TooltipBuilder text="Profil">
								<DropdownMenuTrigger asChild>
									<Button variant="ghost" size="sm" className="h-7 gap-1">
										<User className="h-3.5 w-3.5" />
										<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
											Profil
										</span>
										<ChevronDownIcon className="h-[1.2rem] w-[1.2rem]" />
									</Button>
								</DropdownMenuTrigger>
							</TooltipBuilder>
							<DropdownMenuContent align="end">
								<DropdownMenuLabel>Data Profil</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<Link href="#">Profil Pribadi</Link>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Link href="#">Profil Gaji</Link>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Link href="#">Upload Foto Karyawan</Link>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
			</main>
			{children}
		</div>
	);
};

export default TemplatePegawai;
