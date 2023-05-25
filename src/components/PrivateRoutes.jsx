import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Navbar2 from "./Navbar2";

function PrivateRoutes() {
  const { currentUser } = useContext(AuthContext);
  console.log("current user in private routes", currentUser);
  return currentUser ? (
    <>
      <Navbar2 />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
}

export default PrivateRoutes;
