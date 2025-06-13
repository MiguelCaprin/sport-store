// src/config/firebase.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDn9gftaolbDHDbT9oVGOnNRnGWKo4H6yE",
  authDomain: "sport-store-1e738.firebaseapp.com",
  projectId: "sport-store-1e738",
  storageBucket: "sport-store-1e738.appspot.com",
  messagingSenderId: "715724721503",
  appId: "1:715724721503:web:d421967bb4150d697b3aea"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Instancias
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, db, auth, googleProvider };



