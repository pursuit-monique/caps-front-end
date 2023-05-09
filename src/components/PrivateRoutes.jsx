import { useState, useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";

function PrivateRoutes() {
  //   const [user] = useAuthState(auth);
  const { currentUser } = useContext(AuthContext);
  console.log("current user in private routes", currentUser);
  return currentUser ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoutes;
