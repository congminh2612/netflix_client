// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBkkI-Fg7uSa35gN9hWQoAuKzyoEl70Vw",
  authDomain: "netflix-8ec48.firebaseapp.com",
  projectId: "netflix-8ec48",
  storageBucket: "netflix-8ec48.appspot.com",
  messagingSenderId: "709784956501",
  appId: "1:709784956501:web:5683700be3698f5a9feedc",
  measurementId: "G-CNNYK70F2V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
