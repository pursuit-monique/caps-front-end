import Events from "./components/Events";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div className="app">
      <Header />
      <Events />
    </div>
  );
}

export default App;
