// jshint esversion:6
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAQ0GohB0Egj1AsaKCpTjaEOHo3wnpuxt4",
  authDomain: "ecommerce-db-bc7aa.firebaseapp.com",
  databaseURL: "https://ecommerce-db-bc7aa.firebaseio.com",
  projectId: "ecommerce-db-bc7aa",
  storageBucket: "",
  messagingSenderId: "292327594703",
  appId: "1:292327594703:web:6b494477254d2623"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
