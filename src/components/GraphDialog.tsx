import { Dialog } from "./Dialog";

export interface GraphDialogProps {
    isShown: boolean;
    onClose: () => void;
}

export function GraphDialog({ isShown, onClose }: GraphDialogProps) {
    return (<Dialog title="Edit Chromatogram" isShown={isShown} onClose={onClose}>
        <input autoFocus type="text" placeholder="Name" className="border border-primary" />
        <div className="flex gap-4">
            <input type="text" placeholder="Injection" className="border border-primary flex-1" />
            <input type="text" placeholder="Injection #" className="border border-primary w-8" />
        </div>
        <div className="flex gap-4">
            <input type="text" placeholder="Channel" className="border border-primary flex-1" />
            <input type="text" placeholder="Unit" className="border border-primary w-8" />
        </div>
    </Dialog>);
}