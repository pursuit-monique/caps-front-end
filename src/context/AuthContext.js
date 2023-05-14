import { createContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => setCurrentUser(user));
  // }, []);
  onAuthStateChanged(auth, (user) => setCurrentUser(user));

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
