// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2cf9c.firebaseapp.com",
  projectId: "mern-estate-2cf9c",
  storageBucket: "mern-estate-2cf9c.appspot.com",
  messagingSenderId: "414391773155",
  appId: "1:414391773155:web:9f621a4cbb7d8f4d7222d6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
