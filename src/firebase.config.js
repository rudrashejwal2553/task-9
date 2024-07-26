// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvI4HnnvTJZjWjQp6iC0eEy32f0vw6v4g",
  authDomain: "otp-project-2031d.firebaseapp.com",
  projectId: "otp-project-2031d",
  storageBucket: "otp-project-2031d.appspot.com",
  messagingSenderId: "637671795151",
  appId: "1:637671795151:web:efba5fbc47e5bd05798aba",
  measurementId: "G-L48YECZ5HQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
