import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCTfgGrxX1jHVCQtdDl4gkbTrj2OsVK0kU",
    authDomain: "ecommerce-48f8c.firebaseapp.com",
    databaseURL: "https://ecommerce-48f8c.firebaseio.com",
    projectId: "ecommerce-48f8c",
    storageBucket: "ecommerce-48f8c.appspot.com",
    messagingSenderId: "1087750564832",
    appId: "1:1087750564832:web:f87927c0823a677aa1d985",
    measurementId: "G-CCZ6QPHCGK"
};


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});


export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;