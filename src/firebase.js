// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Si quieres usar autenticación
import { getFirestore } from 'firebase/firestore'; // Si quieres usar Firestore

// Configuración de Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyCnKtUwaODXapyQR3UlzHnzgO3bRRelm3Q',
    authDomain: 'pruebatecnica-ca1eb.firebaseapp.com',
    projectId: 'pruebatecnica-ca1eb',
    storageBucket: 'pruebatecnica-ca1eb.firebasestorage.app',
    messagingSenderId: '1061269821230',
    appId: '1:1061269821230:web:48fbfaa6303a63e4078cbf',
    measurementId: 'G-28524ZMH3Y'
};

// Inicializa Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Exporta servicios que necesitas
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth, db };
