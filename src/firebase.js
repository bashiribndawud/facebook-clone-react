// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnQeEZQfpXcEUe-5k7CFwhcBMRbeekzzA",
  authDomain: "facebook-clone-61eb6.firebaseapp.com",
  projectId: "facebook-clone-61eb6",
  storageBucket: "facebook-clone-61eb6.appspot.com",
  messagingSenderId: "648977280200",
  appId: "1:648977280200:web:97ca542a90921ff21a49fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // initialize firestore service
const auth = getAuth(app); //initialize authentication service

const provider = new GoogleAuthProvider();
export { auth, provider };
export default db;
