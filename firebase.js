import { initializeApp } from 'firebase/app';

import {
getAuth,
signInWithEmailAndPassword,
createUserWithEmailAndPassword, } from "firebase/auth";
import {
getFirestore,
collection,
addDoc,
} from "firebase/firestore";

import { getStorage, ref, uploadBytes, uploadString } from 'firebase/storage';


// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  storageBucket: 'gs://husl-b64ea.appspot.com',
  apiKey: "AIzaSyDfvPyfaDsRoJ0uqFQUUb1e2TfsFJGxA8I",
  authDomain: "husl-b64ea.firebaseapp.com",
  projectId: "husl-b64ea",
  storageBucket: "husl-b64ea.appspot.com",
  messagingSenderId: "218261271677",
  appId: "1:218261271677:web:5897f5b4b3b781a4b5ed14",
  measurementId: "G-7TDMMM9E1Y"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const storageRef = ref(storage, 'captions');

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const uploadData = (data) => {
      uploadBytes(storageRef, data);
  };

  export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword, storage, uploadData
  };
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase