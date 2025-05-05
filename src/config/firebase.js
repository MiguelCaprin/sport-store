
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Importamos Firestore

const firebaseConfig = {
  apiKey: "AIzaSyDn9gftaolbDHDbT9oVGOnNRnGWKo4H6yE",
  authDomain: "sport-store-1e738.firebaseapp.com",
  projectId: "sport-store-1e738",
  storageBucket: "sport-store-1e738.firebasestorage.app",
  messagingSenderId: "715724721503",
  appId: "1:715724721503:web:d421967bb4150d697b3aea"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app); // Creamos la instancia de Firestore

export { db }; // Exportamos db para usarlo en otros archivos
