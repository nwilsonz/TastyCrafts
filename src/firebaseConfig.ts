// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChPodBbAaf58yFrohzFzkQIG3SM42ZEpQ",
    authDomain: "tasty-crafts.firebaseapp.com",
    projectId: "tasty-crafts",
    storageBucket: "tasty-crafts.appspot.com",
    messagingSenderId: "292588330385",
    appId: "1:292588330385:web:03c147846c2f7e7bde8e30"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);