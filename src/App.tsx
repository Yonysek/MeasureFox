import { GraphList } from "./components/GraphList"
import { GraphToolbar } from "./components/GraphToolbar"

function App() {
  const graphs = [
    "Woah this is a graph",
    "Wooooow this is also a graph",
    "Guess what? this is another graph",
    "Im dying"
  ];

  return (<div className="w-full h-full flex p-8 gap-8 justify-stretch">
    <div className="w-1/4 flex flex-col gap-2 h-full">
      <GraphList graphs={graphs} pinnedIndex={1} />
      <GraphToolbar />
    </div>
    <div className="flex flex-col gap-8 w-3/4">
      <div className="h-3/4 border-2 bg-white shadow-xl">

      </div>
      <div className="h-1/4">

      </div>
    </div>
  </div>)
}

export default App