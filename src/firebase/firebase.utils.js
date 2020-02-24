import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAiLl-JotR9AW0qCdTGSYf4n9HngQM2KXE',
  authDomain: 'react-ecommerce-db-37fc7.firebaseapp.com',
  databaseURL: 'https://react-ecommerce-db-37fc7.firebaseio.com',
  projectId: 'react-ecommerce-db-37fc7',
  storageBucket: 'react-ecommerce-db-37fc7.appspot.com',
  messagingSenderId: '163885168227',
  appId: '1:163885168227:web:298b8ff41d0d7e2842aa56',
  measurementId: 'G-SZB3D6HVQ2'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
facebookProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () =>
  firebase.auth().signInWithPopup(googleProvider);
export const signInWithFacebook = () =>
  firebase.auth().signInWithPopup(facebookProvider);

export default firebase;
