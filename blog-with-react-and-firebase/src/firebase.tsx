// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWVHKDbJ30M55N4RCc4Srl7bJvKWSR3EA",
  authDomain: "blog-f6c9f.firebaseapp.com",
  projectId: "blog-f6c9f",
  storageBucket: "blog-f6c9f.firebasestorage.app",
  messagingSenderId: "332036092146",
  appId: "1:332036092146:web:6a70eb0458d90c9fa7e06b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };