import { MdAdd, MdRemove } from "react-icons/md"
import { GraphDialog } from "./GraphDialog"

export function GraphToolbar() {
    return (<div className="flex flex-row-reverse gap-4 px-2 pt-2">
        <button className="bg-primary shadow-xl rounded-md cursor-pointer">
            <MdAdd size={32} color="white" />
        </button>
        <button className="bg-primary shadow-xl rounded-md cursor-pointer">
            <MdRemove size={32} color="white" />
        </button>
        <GraphDialog>
        </GraphDialog>
    </div>)
}