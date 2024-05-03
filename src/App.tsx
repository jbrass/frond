
// import ReactDOM from "react-dom";
import Mermaid from "./Mermaid";
import example from "./example";


function App() {
  return (
    <div className="App">
      <h1>BrassDash</h1>
      <Mermaid chart={example} />
    </div>
  );
}

export default App;
