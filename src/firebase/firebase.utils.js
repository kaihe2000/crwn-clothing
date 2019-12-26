import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBEraeP2Oqme9ZUaMMASTbwlyHimdpY6lY",
    authDomain: "crwn-db-4720b.firebaseapp.com",
    databaseURL: "https://crwn-db-4720b.firebaseio.com",
    projectId: "crwn-db-4720b",
    storageBucket: "crwn-db-4720b.appspot.com",
    messagingSenderId: "74267281937",
    appId: "1:74267281937:web:65b67e09dd3059c349bfb0",
    measurementId: "G-J79C5LZHQD"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
