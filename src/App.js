import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Event from "./pages/Event";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import PrivateRoutes from "./components/PrivateRoutes";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import Event2 from "./pages/Event2";

function App() {
  return (
    <AuthProvider>
      <div className="app ">
        <Router>
          {/* <Navbar /> */}
          <Routes>
            {/* <Route path="/" element={<Welcome />} /> */}

            <Route element={<PrivateRoutes />}>
              <Route path="/index" element={<Home />} exact />
              <Route path="/event" element={<Event />} />
              <Route path="/event2" element={<Event2 />} />

              {/* <Route path="/new" element={<New />} />
            <Route path="/cars/:id" element={<ShowCar />} />
            <Route path="/cars/:id/edit" element={<EditCar />} />
            <Route path="/collections/:id" element={<ShowCollection />} />
            <Route path="/collections/:id/edit" element={<EditCollection />} /> */}
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
