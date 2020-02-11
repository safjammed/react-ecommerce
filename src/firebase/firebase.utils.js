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

/**
 *  Creates user from Signup or social login
 * @param {*} userAuth 
 * @param {*} additionalData 
 */
export const createUserProfileDocument = async(userAuth, additionalData) => {
    //if user is not authenticating then do nothing
    if(!userAuth) return;

    //get user data
    const userRef = firestore.doc(`users/${userAuth.uid}`);    
    //ask for data snapshot from firestore creating a onSnapshot event
    const snapshot = await userRef.get();
    //if the user does not exist
    if (!snapshot.exists){
        //create a new user
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(error){
            console.error("Error Creating User", error.message);
        }        
    }

    //return the user
    return userRef;
}

//initiate application with the cofiguaration
firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

//start google authentication process
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

//this function signs in fro google
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;