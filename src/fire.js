import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/messaging";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBG3O5KnjpgpfZYmGjzwFRAU_Br-MUznWE",
  authDomain: "login-c1f32.firebaseapp.com",
  projectId: "login-c1f32",
  storageBucket: "login-c1f32.appspot.com",
  messagingSenderId: "1076627654176",
  appId: "1:1076627654176:web:f56e6e104f94fd491f9e45",
});

const auth = firebase.auth();
const messaging = firebase.messaging();
const firestore = firebase.firestore();

auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log("User is signed in");
    console.log(user);
  } else {
    // User is signed out
    console.log("User is signed out");
  }
});

export { auth, messaging, firestore };