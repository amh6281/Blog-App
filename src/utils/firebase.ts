// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-2d606.firebaseapp.com",
  projectId: "blog-2d606",
  storageBucket: "blog-2d606.appspot.com",
  messagingSenderId: "59077182256",
  appId: "1:59077182256:web:e53eee0a5c579a8320bef5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
