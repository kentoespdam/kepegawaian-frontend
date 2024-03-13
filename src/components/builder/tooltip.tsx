import { buttonVariants } from "@components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip";
import { cn } from "@utils/index";
import React from "react";

type TooltipBuilderProps = {
    text: string
    children: React.ReactNode
    className?: string
}
const TooltipBuilder = (props: TooltipBuilderProps) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    {props.children}
                </TooltipTrigger>
                <TooltipContent className={cn(props.className)}>
                    <p>{props.text}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

export default TooltipBuilder;