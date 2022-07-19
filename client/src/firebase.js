import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCmu56wtahVRvO4tTltPelp9PDMEVBX6uo',
  authDomain: 'messaging-app-mern-a5520.firebaseapp.com',
  projectId: 'messaging-app-mern-a5520',
  storageBucket: 'messaging-app-mern-a5520.appspot.com',
  messagingSenderId: '968253064421',
  appId: '1:968253064421:web:08eccc4f1cff965723000c',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
