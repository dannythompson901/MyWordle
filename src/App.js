import "./index.css";
import "./App.css";
import Grid from "./components/grid.js";

function App() {
  return (
    <div>
      <h1 className="flex items-center justify-center text-3xl font-bold mb-2 underline">
        MyWordle!
      </h1>
      <div>
        <Grid />
      </div>
    </div>
  );
}

export default App;
