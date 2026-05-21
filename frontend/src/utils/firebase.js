import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-interviewer-faa8c.firebaseapp.com",
  projectId: "ai-interviewer-faa8c",
  storageBucket: "ai-interviewer-faa8c.firebasestorage.app",
  messagingSenderId: "1026588411838",
  appId: "1:1026588411838:web:a5899045038eca86c91bef"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();