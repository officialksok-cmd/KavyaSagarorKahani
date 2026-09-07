// ============================================================
// CENTRAL FIREBASE CONFIGURATION & FIRESTORE EXPORT
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, setDoc, getDoc, deleteDoc, updateDoc, query, orderBy } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// TODO: Replace with your actual project credentials from Firebase Settings
const firebaseConfig = {
  apiKey: "AIzaSyA8J7wdNqZZYVtULaaLvoj7SOMMliMpEXM",
  authDomain: "kavya-sagar-or-kahani.firebaseapp.com",
  projectId: "kavya-sagar-or-kahani",
  storageBucket: "kavya-sagar-or-kahani.firebasestorage.app",
  messagingSenderId: "592461437725",
  appId: "G-3SNF64CD90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export db and firestore methods for your pages to use
export { db, collection, addDoc, getDocs, doc, setDoc, getDoc, deleteDoc, updateDoc, query, orderBy };