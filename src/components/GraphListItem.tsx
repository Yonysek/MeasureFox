import { MdOutlinePushPin, MdPushPin } from "react-icons/md";

export interface GraphListItemProps {
    name: string;
    isPinned?: boolean;
}

export function GraphListItem({name, isPinned=false}: GraphListItemProps) {
    return (<div className="flex w-full items-center">
        <div className="grow">{name}</div>
        <div>
            {isPinned ? <MdPushPin /> : <MdOutlinePushPin />}
        </div>
    </div>)
}