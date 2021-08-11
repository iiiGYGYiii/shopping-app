import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzVZOWZGvO-z1TgWMQCPLWlBwo8fjVEPE",
  authDomain: "iiigygyiii-shopping-app.firebaseapp.com",
  projectId: "iiigygyiii-shopping-app",
  storageBucket: "iiigygyiii-shopping-app.appspot.com",
  messagingSenderId: "241980407236",
  appId: "1:241980407236:web:fa6b8405a7f3a664d5f891",
  measurementId: "G-695313N07T",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
