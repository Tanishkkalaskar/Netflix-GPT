// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD49BjKihLHkaK7G0FBGOzvkHJm8jARFAg",
  authDomain: "netflixgpt-1e93a.firebaseapp.com",
  projectId: "netflixgpt-1e93a",
  storageBucket: "netflixgpt-1e93a.appspot.com",
  messagingSenderId: "531318492337",
  appId: "1:531318492337:web:402b5a96990c30dd206690",
  measurementId: "G-2KBNGNYYSR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
