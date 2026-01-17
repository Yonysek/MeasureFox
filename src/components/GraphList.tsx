import { useState } from "react";
import { GraphListItem } from "./GraphListItem"

export interface GraphListProps {
    graphs: string[];
    pinnedIndex?: number;
}

export function GraphList({ graphs, pinnedIndex }: GraphListProps) {
    const [index, setIndex] = useState(pinnedIndex);

    return (<div className="border-2 bg-white shadow-xl p-2 flex flex-col gap-2 grow">
        {graphs.map((graph, i) =>
            <GraphListItem name={graph} isPinned={i == index} pinClicked={() => setIndex(i == index ? undefined : i)} />
        )}
    </div>)
}