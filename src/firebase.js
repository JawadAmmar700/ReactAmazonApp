import firebase from "firebase"
import "./firebase.css"

const firebaseConfig = {
  apiKey: "AIzaSyDkyTaLUHgydfXRWImkj-9zd9_Kv7beMXc",
  authDomain: "react-4fa82.firebaseapp.com",
  projectId: "react-4fa82",
  storageBucket: "react-4fa82.appspot.com",
  messagingSenderId: "989077173231",
  appId: "1:989077173231:web:a6b402307273159b2efc1a",
  measurementId: "G-6BWCWNYNY3",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
export { db, auth }
