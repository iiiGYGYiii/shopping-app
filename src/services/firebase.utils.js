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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error(error.message);
    }
  }
  return userRef;
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
