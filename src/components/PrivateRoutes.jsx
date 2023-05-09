import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

function PrivateRoutes() {
  const [user] = useAuthState(auth);
  return user ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoutes;
