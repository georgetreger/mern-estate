// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6ec3c.firebaseapp.com",
  projectId: "mern-estate-6ec3c",
  storageBucket: "mern-estate-6ec3c.appspot.com",
  messagingSenderId: "1022688071139",
  appId: "1:1022688071139:web:abbef257750b9d992c64d6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
