import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, sendEmailVerification, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDvcUsSeaorrRWzIPWY6ty0fHhPB2M_jjI",
    authDomain: "beyond-chats-1d070.firebaseapp.com",
    projectId: "beyond-chats-1d070",
    storageBucket: "beyond-chats-1d070.firebasestorage.app",
    messagingSenderId: "654121128347",
    appId: "1:654121128347:web:37d16d7352699a0ad4113e",
    measurementId: "G-V8CKH6R6M7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, sendEmailVerification, createUserWithEmailAndPassword };
