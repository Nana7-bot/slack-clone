import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzNMgz7nydjRujPtBA_7kFPpMU_oU5uCM",
  authDomain: "slack-clone-589e6.firebaseapp.com",
  projectId: "slack-clone-589e6",
  storageBucket: "slack-clone-589e6.appspot.com",
  messagingSenderId: "777735611740",
  appId: "1:777735611740:web:24d50fa4ab15b2dac0cd99",
  measurementId: "G-F27F9YJPJ9",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
