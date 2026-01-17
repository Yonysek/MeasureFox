import { GraphList } from "./components/GraphList"
import { GraphToolbar } from "./components/GraphToolbar"

function App() {
  const graphs = [
    "Woah this is a graph",
    "Wooooow this is also a graph",
    "Guess what? this is another graph",
    "Im dying"
  ];

  return (<div className="w-1/4 flex flex-col gap-2 p-8 h-full">
    <GraphList graphs={graphs} pinnedIndex={1} />
    <GraphToolbar />
  </div>)
}

export default App