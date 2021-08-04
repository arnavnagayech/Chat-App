import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyBBBptA-4ZEkNlGXdz2FRJxQTTCx4Ue4Ms",
    authDomain: "unichat-49cf7.firebaseapp.com",
    projectId: "unichat-49cf7",
    storageBucket: "unichat-49cf7.appspot.com",
    messagingSenderId: "253954959242",
    appId: "1:253954959242:web:2b5ae5a72e430745b18a73"
  }).auth();