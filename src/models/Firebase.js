// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz1MwMrBaFK4UJU-NzRwLTB1CoBgKF_oM",
  authDomain: "math-mentor-7d617.firebaseapp.com",
  projectId: "math-mentor-7d617",
  storageBucket: "math-mentor-7d617.appspot.com",
  messagingSenderId: "476823422296",
  appId: "1:476823422296:web:958e824f854e38ef4c512d",
  measurementId: "G-L1HLTBY8WH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)