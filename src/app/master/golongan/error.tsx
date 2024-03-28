"use client"

import { Alert, AlertDescription, AlertTitle } from "@components/ui/alert";
import { Button } from "@components/ui/button";
import { RefreshCcwIcon } from "lucide-react";

const StatusPegawaiError = ({
    error,
}: {
    error: Error & { digest?: string }
}) => {

    return (
        <Alert>
            <RefreshCcwIcon />
            <AlertTitle>something when wrong!</AlertTitle>
            <AlertDescription>
                {error.message}
                {" "}
                <Button
                    variant="link"
                    onClick={() => window.location.reload()}
                >
                    Try again
                </Button>
            </AlertDescription>
        </Alert >
    );
}

export default StatusPegawaiError;