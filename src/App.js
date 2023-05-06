import Events from "./components/Events";
import bootstrap from "bootstrap";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <Events />
    </div>
  );
}

export default App;
