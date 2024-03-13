"use client"
import { Button } from "@components/ui/button";
import TooltipBuilder from "../tooltip";
import { DeleteIcon } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@components/ui/alert-dialog";

type ButtonDeleteBuilderProps = {
    href: string
    msg: string
}
const ButtonDeleteBuilder = (props: ButtonDeleteBuilderProps) => {
    return (
        <AlertDialog>
            <TooltipBuilder text={props.msg} className="bg-destructive text-destructive-foreground">
                <AlertDialogTrigger asChild>
                    <Button variant="ghost" size="icon" className="p-0 h-7 w-7">
                        <DeleteIcon className="h-5 w-5 text-destructive" aria-hidden="true" />
                    </Button>
                </AlertDialogTrigger>
            </TooltipBuilder>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Yakin akan menghapus data?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone.
                        This will permanently delete this data from the servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-destructive text-destructive-foreground">Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ButtonDeleteBuilder;