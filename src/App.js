import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Events from "./components/Events";
import Header from "./components/Header";
import SignupLogin from "./components/SignupLogin";

function App() {
  return (
    <div className="app">
      {/* <Header /> */}
      <SignupLogin />
      <Events />
    </div>
  );
}

export default App;
