import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// SDK config

const firebaseConfig = {
  apiKey: "AIzaSyANBJb9aBRyR8dFv9pM6QrOS4iMCjxGE7k",
  authDomain: "tarea-1-react-bases.firebaseapp.com",
  projectId: "tarea-1-react-bases",
  storageBucket: "tarea-1-react-bases.appspot.com",
  messagingSenderId: "999974942640",
  appId: "1:999974942640:web:d16020f1695324c4cc8875",
};

firebase.initializeApp(firebaseConfig);

// crear funcion exportable

export const createUserProfileDocument = async (
  scheduledUser,
  aditionalData
) => {
  if (!scheduledUser) return;

  const userRef = firestore.doc(`users/${scheduledUser.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { name, cellNumber, date } = scheduledUser;

    try {
      await userRef.set({
        name,
        cellNumber,
        date,
        ...aditionalData,
      });
    } catch (error) {
      console.log("Error reserving a table", error.message);
    }
  }

  return userRef;
};

// exports

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
