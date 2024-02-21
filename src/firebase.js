// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIRoF9TNsHG1yPyW5CYBiWpbIITzQZ2FU",
  authDomain: "netflix-clone-app-b3ef6.firebaseapp.com",
  projectId: "netflix-clone-app-b3ef6",
  storageBucket: "netflix-clone-app-b3ef6.appspot.com",
  messagingSenderId: "110130280427",
  appId: "1:110130280427:web:ba2cbd6b7bdc5861870bae"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
