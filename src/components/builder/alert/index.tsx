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
	message: string;
	variant?: "error" | "success" | "warning";
};
const AlertBuilder = (props: AlertBuilderProps) => {
	return (
		<Alert className={alertVariant(props.variant)}>
			<AlertTitle className="uppercase">
				{props.variant ? props.variant : "success"}
			</AlertTitle>
			<AlertDescription>{props.message}</AlertDescription>
		</Alert>
	);
};

export default AlertBuilder;
