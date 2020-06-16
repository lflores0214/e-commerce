import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAkMQNhOUSch_nezOT8bGeHktUig_7-KWg",
  authDomain: "e-commerce-56f33.firebaseapp.com",
  databaseURL: "https://e-commerce-56f33.firebaseio.com",
  projectId: "e-commerce-56f33",
  storageBucket: "e-commerce-56f33.appspot.com",
  messagingSenderId: "847922808221",
  appId: "1:847922808221:web:9cdcd90cd7d78a77311b74",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
