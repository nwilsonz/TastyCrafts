// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQUm6FRFXnXyIiLh0d2doKXYbUzMLIyso",
  authDomain: "tastycrafts-e0491.firebaseapp.com",
  projectId: "tastycrafts-e0491",
  storageBucket: "tastycrafts-e0491.appspot.com",
  messagingSenderId: "849844866510",
  appId: "1:849844866510:web:ed6bf652ea24f9ba9caf9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);