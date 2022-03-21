// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAh-Rqr_ZnxsVPQvhjwAhPBkWsKbBKp--M",
  authDomain: "thogus-first.firebaseapp.com",
  projectId: "thogus-first",
  storageBucket: "thogus-first.appspot.com",
  messagingSenderId: "525910223207",
  appId: "1:525910223207:web:fe0c8a43078b3b0bd8e7c2",
  measurementId: "G-10LYWG6L9N"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);