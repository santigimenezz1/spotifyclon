import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBZdXmbLN8e6QdQkfI53_9ROMMB0QO3Yfw",
    authDomain: "spotify-3a924.firebaseapp.com",
    projectId: "spotify-3a924",
    storageBucket: "spotify-3a924.appspot.com",
    messagingSenderId: "809860608721",
    appId: "1:809860608721:web:07e67fb3a87218c5270bf0",
    measurementId: "G-P41NZYL1WH"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);