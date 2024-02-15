// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-460bd.firebaseapp.com",
  projectId: "mern-blog-460bd",
  storageBucket: "mern-blog-460bd.appspot.com",
  messagingSenderId: "364669528963",
  appId: "1:364669528963:web:a99d5e736c349f8e4a24b6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);