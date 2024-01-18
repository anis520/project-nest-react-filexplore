// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbfLqvJpE5-P04Z8jLMp-NO8HTeZEhFk8",
  authDomain: "todoapp-e00da.firebaseapp.com",
  projectId: "todoapp-e00da",
  storageBucket: "todoapp-e00da.appspot.com",
  messagingSenderId: "685567380282",
  appId: "1:685567380282:web:dd03e7ec6ee46471cf5e03",
  measurementId: "G-54NDK5MD40",
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);
//init storage
export const storage = getStorage(firebaseapp);
