import { Avatar, AvatarFallback } from "@components/ui/avatar";
import Image from "next/image";
import MenuSheet from "@components/template/menusheet/index"
import { Suspense } from "react";
import ProfileComponent from "@components/template/profile/index"
import LoadingProfile from "../profile/loading-profile";

const TopBarComponent = () => {
    return (
        <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex flex-row justify-between items-center px-4">
            <div className="flex flex-wrap gap-2 items-center content-center h-full">
                <MenuSheet />
                <div>
                    <Avatar className="h-10 w-12">
                        <Image
                            alt="Logo Perumdam Tirta Satria"
                            src="/images/logo_pdam_40x40.png"
                            fill
                            loading="lazy"
                        />
                    </Avatar>
                </div>
                <div className="font-bold text-2xl">
                    Kepegawaian
                </div>
            </div>
            <Suspense fallback={<LoadingProfile />}>
                <ProfileComponent />
            </Suspense>
        </div>
    );
}

export default TopBarComponent;