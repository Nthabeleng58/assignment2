// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // For database
import { getAuth } from "firebase/auth"; // For authentication
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPb5hv-WS4feZNwBIb2w-zT2AudDkhZ3g",
  authDomain: "web6-febf9.firebaseapp.com",
  projectId: "web6-febf9",
  storageBucket: "web6-febf9.firebasestorage.app",
  messagingSenderId: "772437948009",
  appId: "1:772437948009:web:1020bd2ec1d98224e214f8",
  measurementId: "G-GGW2E9ZX4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Optional, for analytics
const db = getFirestore(app); // Firestore database
const auth = getAuth(app); // Firebase Authentication

// Exports
export { db, auth, analytics };
