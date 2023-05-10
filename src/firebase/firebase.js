import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
const authDomain = process.env.REACT_APP_FIREBASE_AUTHDOMAIN;
const projectId = process.env.REACT_APP_FIREBASE_PROJECTID;
const storageBucket = process.env.REACT_APP_FIREBASE_STORAGEBUCKET;
const messagingSenderId = process.env.REACT_APP_FIREBASE_SENDERID;
const appId = process.env.REACT_APP_FIREBASE_APPID;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { app, auth };
