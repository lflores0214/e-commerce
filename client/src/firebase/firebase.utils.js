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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error){
console.log(error.message, "error creating user")
    }
  }
  return userRef
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
