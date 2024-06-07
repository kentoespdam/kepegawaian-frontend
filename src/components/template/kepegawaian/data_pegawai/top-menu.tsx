import TooltipBuilder from "@components/builder/tooltip";
import { Button } from "@components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@components/ui/dropdown-menu";
import { Separator } from "@components/ui/separator";
import { BookUserIcon, ChevronDownIcon, ContactIcon, PlusCircleIcon, PlusIcon, RssIcon, User, UserCheckIcon, UserPlusIcon } from "lucide-react";
import Link from "next/link";

const TopMenuDataPegawai = () => {
    return (
        <fieldset className="grid rounded-lg border p-2 max-w-content">
            <legend className="-ml-1 px-1 text-sm font-medium">Action</legend>
            <div dir="ltr" data-aria-orientation="horizontal">
                <div className="inline-flex items-center justify-center gap-2">
                    <TooltipBuilder text="Tambah Pegawai">
                        <Link href="/kepegawaian/add">
                            <Button variant="outline" size="icon" className="rounded-lg hover:bg-primary hover:text-primary-foreground">
                                <UserPlusIcon />
                            </Button>
                        </Link>
                    </TooltipBuilder>

                    <TooltipBuilder text="Data Pendukung">
                        <Link href="#">
                            <Button variant="outline" size="icon" className="rounded-lg hover:bg-primary hover:text-primary-foreground">
                                <BookUserIcon />
                            </Button>
                        </Link>
                    </TooltipBuilder>

                    <TooltipBuilder text="Data Kepegawaian">
                        <Link href="#">
                            <Button variant="outline" size="icon" className="rounded-lg hover:bg-primary hover:text-primary-foreground">
                                <ContactIcon />
                            </Button>
                        </Link>
                    </TooltipBuilder>

                    <DropdownMenu>
                        <TooltipBuilder text="Profil">
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    className="rounded-lg hover:bg-primary hover:text-primary-foreground justify-between">
                                    <span>Profil</span>
                                    <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-80" />
                                </Button>
                            </DropdownMenuTrigger>
                        </TooltipBuilder>
                        <DropdownMenuContent align="end" className="rounded-lg">
                            <DropdownMenuLabel>Data Profil</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="hover:bg-primary hover:text-primary-foreground">
                                <Link href="#">Profil Pribadi</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-primary hover:text-primary-foreground">
                                <Link href="#">Profil Gaji</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-primary hover:text-primary-foreground">
                                <Link href="#">Upload Foto Karyawan</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </fieldset>
    );
}

export default TopMenuDataPegawai;