import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCdOG4rkxwGqo-Qd7dq9GH0uc9SqvbPiUk',
	authDomain: 'react-ecommerce-db-c877d.firebaseapp.com',
	databaseURL: 'https://react-ecommerce-db-c877d.firebaseio.com',
	projectId: 'react-ecommerce-db-c877d',
	storageBucket: 'react-ecommerce-db-c877d.appspot.com',
	messagingSenderId: '134261400643',
	appId: '1:134261400643:web:2fae29e9d4a59894e7a0f6',
	measurementId: 'G-6P5E90PJ0L'
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
