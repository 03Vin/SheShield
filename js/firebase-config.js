// js/firebase-config.js — SheShield Firebase Configuration
// Uses Firebase Compat SDK for simplicity (works via <script> tags)

const firebaseConfig = {
  apiKey: "AIzaSyB5HRus5iyhpI3txICDVVUpOBDWK78RhLk",
  authDomain: "sheshield-282ab.firebaseapp.com",
  projectId: "sheshield-282ab",
  storageBucket: "sheshield-282ab.firebasestorage.app",
  messagingSenderId: "842924799969",
  appId: "1:842924799969:web:568deca4f06b248bbf84a0",
  measurementId: "G-3ME7V8261K"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
