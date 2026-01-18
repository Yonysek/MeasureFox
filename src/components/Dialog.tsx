import { useLayoutEffect, useRef } from "react";
import { Page } from "./Page";
import { MdClose } from "react-icons/md"

export interface DialogProps extends React.PropsWithChildren {
    title: string;
    isShown: boolean;
    onClose: () => void;
}

export function Dialog({ title, isShown, onClose, children }: DialogProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useLayoutEffect(() => {
        if (dialogRef.current?.open && !isShown) {
            dialogRef.current.close();
        } else if (dialogRef.current && !dialogRef.current.open && isShown) {
            dialogRef.current.showModal();
        }
    }, [isShown]);

    return (<dialog ref={dialogRef} onClose={() => onClose()} className="m-auto">
        <Page className="flex flex-col gap-4 w-2xl">
            <div className="flex flex-row justify-between items-center">
                <h2>{title}</h2>
                <MdClose onClick={() => onClose()} className="cursor-pointer" color="var(--color-primary)" size={24} />
            </div>
            {children}
        </Page>
    </dialog>)
}