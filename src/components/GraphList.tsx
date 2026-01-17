import { useState } from "react";
import { GraphListItem } from "./GraphListItem"
import { Page } from "./Page"

export interface GraphListProps {
    graphs: string[];
    pinnedIndex?: number;
}

export function GraphList({ graphs, pinnedIndex }: GraphListProps) {
    const [index, setIndex] = useState(pinnedIndex);

    return (<Page className="flex flex-col gap-2 grow">
        {graphs.map((graph, i) =>
            <GraphListItem name={graph} isPinned={i == index} pinClicked={() => setIndex(i == index ? undefined : i)} />
        )}
    </Page>)
}