// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-storage.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgnWpBx2LCqbwVujgaWnWeoPKCir_wK3A",
  authDomain: "churro-magico.firebaseapp.com",
  projectId: "churro-magico",
  storageBucket: "churro-magico.firebasestorage.app",
  messagingSenderId: "458960427829",
  appId: "1:458960427829:web:16ba06ff3a3430c5dc8a7c",
  measurementId: "G-63F6EL4DWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const realtimeDb = getDatabase(app);
