import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip";
import { cn } from "@utils/index";

type TooltipBuilderProps = {
    text: string
    children: React.ReactNode
    className?: string
}
const TooltipBuilder = (props: TooltipBuilderProps) => {
    return (
        <TooltipProvider delayDuration={0}>
            <Tooltip delayDuration={0}>
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