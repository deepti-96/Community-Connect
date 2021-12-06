import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC-DIG_h-k1F0_7dMsS364I309H_fC4-XI",
  authDomain: "community-connect-5c95a.firebaseapp.com",
  projectId: "community-connect-5c95a",
  storageBucket: "community-connect-5c95a.appspot.com",
  messagingSenderId: "447353574357",
  appId: "1:447353574357:web:929cc15350e8c7ccd8a35c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };