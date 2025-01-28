// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpVG_8tKXojpQy7-OfNmtt9VHSGK8bqi8",
  authDomain: "netflixgpt-1c16c.firebaseapp.com",
  projectId: "netflixgpt-1c16c",
  storageBucket: "netflixgpt-1c16c.firebasestorage.app",
  messagingSenderId: "1021205196067",
  appId: "1:1021205196067:web:04a489046a1a4f43217096",
  measurementId: "G-84WBVV3PWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);