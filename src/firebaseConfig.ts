// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDG9VFlb8W2tBWHEaJZZ_4ZmtyS1Q7bczE",
  authDomain: "t-coffeetascom.firebaseapp.com",
  projectId: "t-coffeetascom",
  storageBucket: "t-coffeetascom.firebasestorage.app",
  messagingSenderId: "99256010537",
  appId: "1:99256010537:web:b2a6d1ee1562a20cc35938",
  measurementId: "G-4W3HPGSS3Z"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta o Auth
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
