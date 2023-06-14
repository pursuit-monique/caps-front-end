import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Event from "./pages/Event";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import PrivateRoutes from "./components/PrivateRoutes";
import { AuthProvider } from "./context/AuthContext";
import About from "./pages/About";
import "./App.css";
import Event2 from "./pages/Event2";
import NewEvent from "./pages/NewEvent";
import LiveStream from "./pages/LiveStream";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <AuthProvider>
      <div className="app ">
        <Router>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/index" element={<Home />} exact />
              <Route path="/event/:id" element={<Event />} />
              <Route path="/event2/:id" element={<Event2 />} />
              <Route path="/new/event" element={<NewEvent />} />
              <Route path="/about" element={<About />} />
              <Route path="/live/:roomCode" element={<LiveStream />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
