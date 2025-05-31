// src/services/credenciaisFirebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCKq9RuaXKb2E2jj29mQSGKCBfEIwTtGas",
  authDomain: "apppiunupam.firebaseapp.com",
  projectId: "apppiunupam",
  storageBucket: "apppiunupam.firebasestorage.app",
  messagingSenderId: "809539850471",
  appId: "1:809539850471:web:26294134199814b8fb1242",
  measurementId: "G-TN8TZNZ97M"
};

// Inicializa o App
const appFirebase = initializeApp(firebaseConfig);

// **NOVO**: inicializa e exporta o Firestore
export const db = getFirestore(appFirebase);

// Mantém export default do App (útil caso queira)
export default appFirebase;
