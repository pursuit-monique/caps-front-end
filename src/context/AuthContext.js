import { createContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  // {"uid":"XfSdz27mPaan7N1HjTKiyJFuwXJ3","email":"ken.ata@gmail.com","emailVerified":false,"isAnonymous":false,"providerData":[{"providerId":"password","uid":"ken.ata@gmail.com","displayName":null,"email":"ken.ata@gmail.com","phoneNumber":null,"photoURL":null}],"stsTokenManager":{"refreshToken":"APZUo0ReyQR-5pIoRytPJPcAA5Wma47ScbzGuzxvJKovTKd-MN6_N4xVmMOOtDI_UUKn6G95Ua0HCrAS-43VOHX_SU2blkyOcB45a-3eFrqvG0wd-jzLY3USbAylK_m5hknwpcvwaLf6KxTMO7l9wueeIXx7FRqK5ogIYxCyuc3UWXnKvNQh58GeHg_FuMAcjtt3zpDb3E4YgDab33hKj2SSbQF9xBMg9A","accessToken":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3YmFiYWFiYTEwNWFkZDZiM2ZiYjlmZjNmZjVmZTNkY2E0Y2VkYTEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY2Fwc3RvbmUtOGUzZGMiLCJhdWQiOiJjYXBzdG9uZS04ZTNkYyIsImF1dGhfdGltZSI6MTY4Njc5NDE3NywidXNlcl9pZCI6IlhmU2R6MjdtUGFhbjdOMUhqVEtpeUpGdXdYSjMiLCJzdWIiOiJYZlNkejI3bVBhYW43TjFIalRLaXlKRnV3WEozIiwiaWF0IjoxNjg2Nzk0MTc3LCJleHAiOjE2ODY3OTc3NzcsImVtYWlsIjoia2VuLmF0YUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsia2VuLmF0YUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.MTanMIGqEFW55Mf3Rjp_FwwIPH0C6uEq8z-qc4rvV13AM3fizBQAKijO_VjlbJBuukw1TjWXwbGKNcf12ZYl4jTbzuR2MUhI0cNf5iWawR_xyjZ53OBFdmktB2v_ViZ-bM4ZV2eKAscjDjTakjPUq_nNIR4LLgWeuq9_4P1f1-2sFws6RNLJKxccn9u5z0DdNfelQBjIwJL4uXr6uZrj0cA9TPPtHXImng7uUspH5mDVSUNFezrMFA18un9lDawCFDqUhr6gLiZhFmQt_SxY2uXeQwbVIH-sm0J5ezWbGRzvb2Kx8WtzT7TX97LGFOojknMJ4_BSD3yem_2l06Se0g","expirationTime":1686797777573},"createdAt":"1686757557183","lastLoginAt":"1686794177547","apiKey":"AIzaSyD2SVkLj8PR5KgmoFxr04_9IzhMfIbXTug","appName":"[DEFAULT]"}

  onAuthStateChanged(auth, (user) => setCurrentUser(user));

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
