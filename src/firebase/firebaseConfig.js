// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUwynhYUL8oLs7xyVutFpO5_U3ZEzmNXU",
  authDomain: "fir-6d52a.firebaseapp.com",
  projectId: "fir-6d52a",
  storageBucket: "fir-6d52a.firebasestorage.app",
  messagingSenderId: "614675752230",
  appId: "1:614675752230:web:8c9d76204fbce69bd58de7",
  measurementId: "G-SM2EWL8K2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);