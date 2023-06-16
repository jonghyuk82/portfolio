import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsE6j1OeZFU3w8hEBNayZ9FD6n8G_6Wpw",
  authDomain: "portfolio-app-54259.firebaseapp.com",
  projectId: "portfolio-app-54259",
  storageBucket: "portfolio-app-54259.appspot.com",
  messagingSenderId: "467268749418",
  appId: "1:467268749418:web:0cde0528f12f4432712213",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
