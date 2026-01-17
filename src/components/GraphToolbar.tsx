import { MdAdd, MdRemove } from "react-icons/md"

export function GraphToolbar() {
    return (<div className="flex flex-row-reverse gap-4 p-2">
        <div className="bg-primary shadow-xl rounded-md">
            <MdAdd size={32} color="white" />
        </div>
        <div className="bg-primary shadow-xl rounded-md">
            <MdRemove size={32} color="white" />
        </div>
    </div>)
}