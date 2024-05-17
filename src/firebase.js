import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD0wDB-i7nzk1Wp5Yxzpt9uRYWU2IEhkOY",
  authDomain: "auth-development-e150e.firebaseapp.com",
  projectId: "auth-development-e150e",
  storageBucket: "auth-development-e150e.appspot.com",
  messagingSenderId: "314118213279",
  appId: "1:314118213279:web:e4a2e22f5f4910adbd1caa",
});

export const authentication = app.auth();
export default app;
