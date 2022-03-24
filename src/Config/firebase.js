import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu6HJE1hja3lZPMfrjinWwyFAjNdly7J4",
  databaseURL: "https://bloodapp-34cd9-default-rtdb.firebaseio.com",
  authDomain: "bloodapp-34cd9.firebaseapp.com",
  projectId: "bloodapp-34cd9",
  storageBucket: "bloodapp-34cd9.appspot.com",
  messagingSenderId: "746014356537",
  appId: "1:746014356537:web:263d7d0b4ec0cd1e0c89e8",
};

console.log(firebase.auth);

firebase.initializeApp(firebaseConfig);

export { firebase as default };
