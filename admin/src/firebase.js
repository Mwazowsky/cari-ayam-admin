// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBxVhX8VwHhmc0lepsDcYAZlB3O7S0mnc",
  authDomain: "cariayam.firebaseapp.com",
  projectId: "cariayam",
  storageBucket: "cariayam.appspot.com",
  messagingSenderId: "800617521309",
  appId: "1:800617521309:web:cffdba69b762d156347474",
  measurementId: "G-7CH2DSH297"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
