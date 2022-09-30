// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzIhK7h2l9h82pFwvIgIIdTASyG7PDNrM",
  authDomain: "tienda-rey.firebaseapp.com",
  projectId: "tienda-rey",
  storageBucket: "tienda-rey.appspot.com",
  messagingSenderId: "156351930452",
  appId: "1:156351930452:web:2678a3e920d196cf0c8dc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);