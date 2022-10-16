
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA77jpAEPRlRoKYCLPaZDRFXM_dtcvIXIY",
    authDomain: "react-56abc.firebaseapp.com",
    projectId: "react-56abc",
    storageBucket: "react-56abc.appspot.com",
    messagingSenderId: "956796222178",
    appId: "1:956796222178:web:2dcbf31d0dbae5c93d7cbb",
    measurementId: "G-7H0KXR9EZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)