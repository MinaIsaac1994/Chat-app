// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuiB1oISRqTCqXzSAr--i8IHAXqhK5mjA",
  authDomain: "chat-app-aef8b.firebaseapp.com",
  projectId: "chat-app-aef8b",
  storageBucket: "chat-app-aef8b.appspot.com",
  messagingSenderId: "443341809881",
  appId: "1:443341809881:web:18e577c5f303d9e88236c8",
  measurementId: "G-956MGJWXLD",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
export { db, auth };
