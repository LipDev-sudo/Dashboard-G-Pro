import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfv4vEafuZcKG7I37tK12TNpbfE89u_D0",
  authDomain: "dashboard-g-pro.firebaseapp.com",
  projectId: "dashboard-g-pro",
  storageBucket: "dashboard-g-pro.firebasestorage.app",
  messagingSenderId: "349860818176",
  appId: "1:349860818176:web:baaa1c113f6136e3a5d7e5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);