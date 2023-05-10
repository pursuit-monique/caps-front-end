import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function PrivateRoutes() {
  const { currentUser } = useContext(AuthContext);
  console.log("current user in private routes", currentUser);
  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoutes;
