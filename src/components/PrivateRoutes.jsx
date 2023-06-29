import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Navbar from "./Navbar";

function PrivateRoutes() {
  const { currentUser } = useContext(AuthContext);
  console.log("current user in private routes", currentUser);
  return currentUser ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
}

export default PrivateRoutes;
