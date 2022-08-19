import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk3WdONJ15mjiK7-ArUe8Low0ZKhIL0JM",
  authDomain: "coderreact-dd3ff.firebaseapp.com",
  projectId: "coderreact-dd3ff",
  storageBucket: "coderreact-dd3ff.appspot.com",
  messagingSenderId: "1014038036162",
  appId: "1:1014038036162:web:e7a1025776f1d0c639455b",
  measurementId: "G-Z0HFZRE3TR"
}
// Initialize Firebase
initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
)