import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCnaxHqB3evnCJHtUsMM5aFp_LD7GpA0mg",
  authDomain: "reactshop-6e379.firebaseapp.com",
  projectId: "reactshop-6e379",
  storageBucket: "reactshop-6e379.firebasestorage.app",
  messagingSenderId: "831100881573",
  appId: "1:831100881573:web:271108d02fd87937a51b4c"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)