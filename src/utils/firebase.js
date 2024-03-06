// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzMziWkwVf-beW1HJFzfspNCqU-tN92eE",
  authDomain: "netflixgpt-5505d.firebaseapp.com",
  projectId: "netflixgpt-5505d",
  storageBucket: "netflixgpt-5505d.appspot.com",
  messagingSenderId: "720260900109",
  appId: "1:720260900109:web:81fd541ba5249b0025bc44",
  measurementId: "G-1P75JL0357"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
