// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6kNBOdMBsgD10XpP4knEsUGXnhNjLnDw",
  authDomain: "moviestream-fa4ba.firebaseapp.com",
  projectId: "moviestream-fa4ba",
  storageBucket: "moviestream-fa4ba.firebasestorage.app",
  messagingSenderId: "226345238780",
  appId: "1:226345238780:web:2de3fc6330360d6ebc9779",
  measurementId: "G-HVHYYRE27F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth()