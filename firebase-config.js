// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsc-YOOqnuJRp1fKEAqoBotFbXZecli3A",
  authDomain: "react-prac-c7da6.firebaseapp.com",
  databaseURL: "https://react-prac-c7da6-default-rtdb.firebaseio.com",
  projectId: "react-prac-c7da6",
  storageBucket: "react-prac-c7da6.appspot.com",
  messagingSenderId: "611006100325",
  appId: "1:611006100325:web:a8956226fd14b26c9aa78c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)