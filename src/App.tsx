import { GraphListItem } from "./components/GraphListItem"

function App() {
  return (<div className="w-1/4 flex flex-col gap-2 p-8">
    <div className="border-2 bg-white shadow-xl p-2 flex flex-col gap-2">
      <GraphListItem name="Woah this is a graph" isPinned/>
      <GraphListItem name="Wooooow this is also a graph"/>
      <GraphListItem name="Guess what? this is another graph"/>
      <GraphListItem name="Im dying"/>
    </div>
  </div>)
}

export default App