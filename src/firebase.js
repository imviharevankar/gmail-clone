import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzxwhcww9ExHBA6mt1J3C20o67Y5QjiEU",
    authDomain: "clone-6a509.firebaseapp.com",
    projectId: "clone-6a509",
    storageBucket: "clone-6a509.appspot.com",
    messagingSenderId: "288848367522",
    appId: "1:288848367522:web:925cdc64e853a15a526cfb",
    measurementId: "G-9SNWKHCED8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };