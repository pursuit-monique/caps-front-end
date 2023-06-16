import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

const youtubeApi = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  headers: {
    "Content-Type": "application/json",
  },
});

let authToken = null;

const updateAuthToken = async (user) => {
  if (user) {
    try {
      const token = await user.getIdToken();
      authToken = token;
      //   console.log("Got user auth token:", authToken);
    } catch (error) {
      console.error("Error getting user auth token:", error);
    }
  } else {
    authToken = null;
  }
};

onAuthStateChanged(auth, updateAuthToken);

youtubeApi.interceptors.request.use((config) => {
  if (authToken) {
    console.log("authToken", authToken);
    config.headers.Authorization = `Bearer ${authToken}`;
    console.log("config headers Authorization", config.headers.Authorization);
  }

  return config;
});

export default youtubeApi;
