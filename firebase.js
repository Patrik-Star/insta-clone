// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgq2muDDOz6PdNErMKdtDyw9JyeCoJdZY",
  authDomain: "insta-clone-97e6b.firebaseapp.com",
  projectId: "insta-clone-97e6b",
  storageBucket: "insta-clone-97e6b.appspot.com",
  messagingSenderId: "135127443563",
  appId: "1:135127443563:web:7e1b4a91db5c90137c692e",
  measurementId: "G-ETW6D08NRX"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp(); //singleton pattern
// const analytics = getAnalytics(app); TODO: implement analytics

const db = getFirestore();
const storage = getStorage();

export { app, db, storage }
