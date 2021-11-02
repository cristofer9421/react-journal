import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDR6FfDzglkDCEGv3KAABaVjE38n-vPY-E",
    authDomain: "react-journal-app-42811.firebaseapp.com",
    projectId: "react-journal-app-42811",
    storageBucket: "react-journal-app-42811.appspot.com",
    messagingSenderId: "450376500121",
    appId: "1:450376500121:web:eb9ebbfe42e2b7aad08908"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}