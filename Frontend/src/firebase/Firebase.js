// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBSjDbyal-i2cmZY4GZ5VYkDrV7pg_okc8",
  authDomain: "blogsite-c6808.firebaseapp.com",
  projectId: "blogsite-c6808",
  storageBucket: "blogsite-c6808.appspot.com",
  messagingSenderId: "365951872185",
  appId: "1:365951872185:web:6640f2c25fc1f260b17f68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);