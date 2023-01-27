// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRbB-ILnUCzcRs2Rfdoh0dntKet5EdORM",
  authDomain: "react-with-firebase-377b7.firebaseapp.com",
  projectId: "react-with-firebase-377b7",
  storageBucket: "react-with-firebase-377b7.appspot.com",
  messagingSenderId: "688510246328",
  appId: "1:688510246328:web:6f74817220500bcaaf034d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app