import { Alert, AlertDescription, AlertTitle } from "@components/ui/alert";

const alertVariant = (variant?: string) => {
	switch (variant) {
		case "error":
			return "bg-destructive text-destructive-foreground";
		case "warning":
			return "bg-warning text-warning-foreground";
		default:
			return "bg-primary text-primary-foreground";
	}
};
type AlertBuilderProps = {
	message: string | string[];
	variant?: "error" | "success" | "warning" | "destructive";
	untitled?: boolean;
};
const AlertBuilder = (props: AlertBuilderProps) => {
	return (
		<Alert
			variant={props.variant === "destructive" ? "destructive" : "default"}
			className={
				props.variant !== "destructive" ? alertVariant(props.variant) : ""
			}
		>
			{props.untitled ? null : (
				<AlertTitle className="uppercase">
					{props.variant ? props.variant : "success"}
				</AlertTitle>
			)}
			<AlertDescription>{props.message}</AlertDescription>
		</Alert>
	);
};

export default AlertBuilder;
