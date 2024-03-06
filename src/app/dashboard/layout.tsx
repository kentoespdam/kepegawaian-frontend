import React from "react";
import TopBarComponent from "@components/template/topbar";
import ContentComponent from "@components/template/content";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-screen min-h-screen bg-gradient-to-r from-violet-700 to-teal-300 flex flex-col justify-between">
            <div className="flex flex-col">
                <TopBarComponent />
                <ContentComponent>{children}</ContentComponent>

                <div className="absolute bottom-0 w-full text-center">
                    <h3 className="absolute bottom-0 w-full text-center">Perumdam Tirta Satria</h3>
                    <div className="w-full -z-1">
                        <svg
                            className="w-full min-h-[100px] max-h-[150px]"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 24 150 28"
                            preserveAspectRatio="none"
                            shapeRendering="auto"
                        >
                            <title>Wave</title>
                            <defs>
                                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                            </defs>
                            <g>
                                <use xlinkHref="#gentle-wave" className="animate-parallax delay-min-2s duration-7s" x="48" y="0" fill="rgba(255,255,255,0.7" />
                                <use xlinkHref="#gentle-wave" className="animate-parallax delay-min-3s duration-10s" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                                <use xlinkHref="#gentle-wave" className="animate-parallax delay-min-4s duration-13s" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                                <use xlinkHref="#gentle-wave" className="animate-parallax delay-min-5s duration-20s" x="48" y="7" fill="#fff" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
