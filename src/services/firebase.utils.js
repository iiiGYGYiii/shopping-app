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

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((p, c) => {
    p[c.title.toLowerCase()] = c;
    return p;
  }, {});
};

export const getCurrentUser = () =>
  new Promise((res, rej) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      res(userAuth);
    }, rej);
  });

export default firebase;
