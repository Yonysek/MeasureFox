import { MdOutlinePushPin, MdPushPin } from "react-icons/md";

export interface GraphListItemProps {
    name: string;
    isPinned?: boolean;
    pinClicked: () => void;
}

export function GraphListItem({ name, isPinned = false, pinClicked }: GraphListItemProps) {
    return (<div className="flex w-full items-center">
        <div className="grow">{name}</div>
        <div className="cursor-pointer" onClick={() => pinClicked()}>
            {isPinned ? <MdPushPin /> : <MdOutlinePushPin />}
        </div>
    </div>)
}