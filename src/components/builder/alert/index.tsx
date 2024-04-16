import { Alert, AlertDescription, AlertTitle } from "@components/ui/alert";

type AlertVariant = "warning" | "primary" | "destructive";

type AlertProps = {
	message: string | string[];
	variant?: AlertVariant;
	untitled?: boolean;
};

const defaultVariant: AlertVariant = "primary";

const variantClassMap: Record<AlertVariant, string> = {
	warning: "bg-warning text-warning-foreground",
	primary: "bg-primary text-primary-foreground",
	destructive: "bg-destructive text-destructive-foreground",
};

const AlertBuilder = ({
	message,
	variant = defaultVariant,
	untitled = false,
}: AlertProps) => {
	const variantClass = variantClassMap[variant];

	return (
		<Alert variant={variant} className={untitled ? "" : variantClass}>
			{!untitled && <AlertTitle className="uppercase">{variant}</AlertTitle>}
			<AlertDescription>{message}</AlertDescription>
		</Alert>
	);
};

export default AlertBuilder;

