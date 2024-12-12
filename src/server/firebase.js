// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoiDCh5d9j8EpG2jmXTBj4dkBw9kA2Yvc",
  authDomain: "calendar-7e58e.firebaseapp.com",
  projectId: "calendar-7e58e",
  storageBucket: "calendar-7e58e.firebasestorage.app",
  messagingSenderId: "148754479471",
  appId: "1:148754479471:web:330df68041ec3e575bd09a",
  measurementId: "G-HRKZSS6TBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);