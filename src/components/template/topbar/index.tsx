import { Avatar, AvatarFallback } from "@components/ui/avatar";
import Image from "next/image";
import MenuSheet from "@components/template/menusheet/index"
import { Suspense } from "react";
import ProfileComponent from "@components/template/profile/index"
import LoadingProfile from "../profile/loading-profile";

const TopBarComponent = () => {
    return (
        <div className="shadow-md">
            <div className="max-w-7x1 mx-auto mr-4 px-4 py-2 sm:px-4 lg:px-4">
                <div className="flex h-12 items-center justify-between">
                    <div className="flex items-center justify-between gap-4">
                        <Avatar className="h-10 w-12">
                            <Image
                                alt="Logo Perumdam Tirta Satria"
                                src="/images/logo_pdam_40x40.png"
                                fill
                                loading="lazy"
                                className="dark: bg-white"
                            />
                            <AvatarFallback>Logo PDAM</AvatarFallback>
                        </Avatar>
                        <MenuSheet />
                        <h2 className="scroll-m-20 text-2xl font-bold tracking-tight">
                            Kepegawaian
                        </h2>
                    </div>
                    <div className="md:ml-6">
                        <Suspense fallback={<LoadingProfile />}>
                            <ProfileComponent />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBarComponent;