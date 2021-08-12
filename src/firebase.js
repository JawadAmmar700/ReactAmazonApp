import firebase from 'firebase'
import './firebase.css'

const firebaseConfig = {
    apiKey: "AIzaSyADrQUU9MMfpkRwl8Rq_UR7EmVo7PxmsNo",
    authDomain: "clone-ee955.firebaseapp.com",
    databaseURL: "https://clone-ee955-default-rtdb.firebaseio.com",
    projectId: "clone-ee955",
    storageBucket: "clone-ee955.appspot.com",
    messagingSenderId: "826179532206",
    appId: "1:826179532206:web:233475d3a688346fe6843f",
    measurementId: "G-YWWVJN4Q7K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };