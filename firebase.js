import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBsrgu6_SjyYgZxU_vlOaNmc7zamW2qCv8",
  authDomain: "dcastro-d55b7.firebaseapp.com",
  projectId: "dcastro-d55b7",
  storageBucket: "dcastro-d55b7.firebasestorage.app",
  messagingSenderId: "1085171518531",
  appId: "1:1085171518531:web:4cbb8ee63ca9a6c49018f6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp };
