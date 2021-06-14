import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBjQjGx0w69SwUab_88Z4fLfbLrf0G0i-0',
  authDomain: 'crown-db-b306f.firebaseapp.com',
  projectId: 'crown-db-b306f',
  storageBucket: 'crown-db-b306f.appspot.com',
  messagingSenderId: '103647300718',
  appId: '1:103647300718:web:d7c03f65fae52a01c32a7f',
  measurementId: 'G-GK7YNGTM3G',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
