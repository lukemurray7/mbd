import * as firebase from 'firebase';
import FirebaseConfig from './keys';

// import('firebase/firestore');


firebase.initializeApp(FirebaseConfig);

export const DB = firebase.firestore();
export const AUTH = firebase.auth();
export const GOOGLE_AUTH = new firebase.auth.GoogleAuthProvider();
