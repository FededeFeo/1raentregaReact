
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCA03kFm7vFoCfUxZFURjl-JTCYXl37IVg",
  authDomain: "reactcoder-defeo.firebaseapp.com",
  projectId: "reactcoder-defeo",
  storageBucket: "reactcoder-defeo.appspot.com",
  messagingSenderId: "353518522038",
  appId: "1:353518522038:web:32ba3dd01f1b23c57b2017",
  measurementId: "G-XEBXY5BHFV"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)