import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOJJv2Zmbaw6HMW8SP5ZsVAfvaY-Sh16U",
  authDomain: "crwn-db-1e207.firebaseapp.com",
  projectId: "crwn-db-1e207",
  storageBucket: "crwn-db-1e207.appspot.com",
  messagingSenderId: "709525031290",
  appId: "1:709525031290:web:871d60348bd20663132ec3",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//SET UP GG AUTHENTICATION
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
