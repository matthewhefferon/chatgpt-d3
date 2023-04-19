import "./App.css";
import BarChartD3 from "./components/BarChartD3";
import BarChartVisx from "./components/BarChartVisx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BarChartD3 />
        <BarChartVisx />
      </header>
    </div>
  );
}

export default App;
