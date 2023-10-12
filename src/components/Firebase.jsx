import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzG2JFfeWOYTaA_SbJvHW7wA3HTtC4S10",
    authDomain: "star-e-commerce-c54e6.firebaseapp.com",
    projectId: "star-e-commerce-c54e6",
    storageBucket: "star-e-commerce-c54e6.appspot.com",
    messagingSenderId: "133409412484",
    appId: "1:133409412484:web:0e048a3a1e32fc5dc4b9d1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db };