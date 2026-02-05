// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getDatabase, ref, set, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtbukC2KnnJj3LUNEKtYzuc2nhtSgi2Kw",
  authDomain: "todolist-4f6e6.firebaseapp.com",
  projectId: "todolist-4f6e6",
  storageBucket: "todolist-4f6e6.firebasestorage.app",
  messagingSenderId: "410793071715",
  appId: "1:410793071715:web:7813557d38310b667e5456",
  measurementId: "G-W57308GWE4",
};

// Initialize Firebase
const FIREBASEAPP = initializeApp(firebaseConfig);
let ANALYTICS: any;
isSupported()
  .then((supported) => {
    if (supported) {
      ANALYTICS = getAnalytics(FIREBASEAPP);
    }
  })
  .catch(() => {
    // analytics not supported in this environment (e.g., Node)
  });
const DATABASE = getDatabase(FIREBASEAPP);

// Referência para um nó "products" no banco de dados
export { FIREBASEAPP, ANALYTICS, DATABASE };
