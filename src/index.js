import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv1EELio8ZR4iBx9SZTx9sA-X-eLnjvMQ",
  authDomain: "cart-61cd9.firebaseapp.com",
  projectId: "cart-61cd9",
  storageBucket: "cart-61cd9.appspot.com",
  messagingSenderId: "856422576383",
  appId: "1:856422576383:web:9f4aeb3e25880c5c1a9cca"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

