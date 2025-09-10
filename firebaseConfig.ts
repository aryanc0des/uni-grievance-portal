// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Replace with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyBh_7mq8UaNHGsMII-Jl5Gfsy7aX4CsIqw",
  authDomain: "uni-grievance-portal.firebaseapp.com",
  projectId: "uni-grievance-portal",
  storageBucket: "uni-grievance-portal.firebasestorage.app",
  messagingSenderId: "948269100866",
  appId: "1:948269100866:ios:e0f2442700a180adbe62db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services to use across app
export const auth = getAuth(app);
export const db = getFirestore(app);