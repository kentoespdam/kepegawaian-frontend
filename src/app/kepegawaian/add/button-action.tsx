"use client"
import { Button } from "@components/ui/button";
import { LoadingButton } from "@components/ui/loading-button";
import { CircleXIcon, SaveIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const ButtonActionComponent = () => {
    const { push } = useRouter();
    const cancelForm = () => push("/kepegawaian/data_pegawai");

    return (
        <div className="flex items-center justify-end gap-2 mt-4 rounded-lg border p-2">
            <Button variant="destructive" type="button" onClick={cancelForm}>
                <CircleXIcon className="mr-2" />
                Cancel
            </Button>
            <LoadingButton title="Save" icon={<SaveIcon />} />
        </div>
    );
}

export default ButtonActionComponent;