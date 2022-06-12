import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBf7ouw48KW7rwlphEAAdVD4wFZi5JaFP0",
  authDomain: "contactform-16c0c.firebaseapp.com",
  projectId: "contactform-16c0c",
  storageBucket: "contactform-16c0c.appspot.com",
  messagingSenderId: "589093329030",
  appId: "1:589093329030:web:13fc5d79cb104af1679907",
  measurementId: "G-89YSF5KN7Q"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
