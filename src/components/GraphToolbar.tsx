import { MdAdd, MdRemove } from "react-icons/md"
import { GraphDialog } from "./GraphDialog"
import { useState } from "react"

export function GraphToolbar() {
    const [dialogShown, setDialogShown] = useState(false);

    return (<div className="flex flex-row-reverse gap-4 px-2 pt-2">
        <button className="bg-primary shadow-xl rounded-md cursor-pointer" onClick={() => setDialogShown(true)}>
            <MdAdd size={32} color="white" />
        </button>
        <button className="bg-primary shadow-xl rounded-md cursor-pointer">
            <MdRemove size={32} color="white" />
        </button>
        <GraphDialog isShown={dialogShown} onClose={() => setDialogShown(false)} />
    </div>)
}