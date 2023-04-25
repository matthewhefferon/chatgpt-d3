import "./App.css";
import Bard from "./components/Bard";
import ChatGPT from "./components/ChatGPT";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* ChatGPT successfully created a bar chart in D3 with no errors! */}
        <ChatGPT />
        
        {/* Bard failed to create a bar chart in D3 without errors */}
        {/* <Bard /> */}
      </header>
    </div>
  );
}

export default App;
