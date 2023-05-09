import { createContext, useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  // const [user] = useAuthState(auth);
  // console.log("user in auth context", user);

  useEffect(() => {
    onAuthStateChanged(auth, (firebaseUser) => setCurrentUser(firebaseUser));
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
