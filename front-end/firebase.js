// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

let firebaseConfig = {
  apiKey: "api-key",
  authDomain: "conjugation-practice.firebaseapp.com",
  databaseURL: "https://conjugation-practice.firebaseio.com",
  projectId: "conjugation-practice",
  storageBucket: "conjugation-practice.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};

// Initialize Firebase
const conj = firebase.initializeApp(firebaseConfig);
const db = conj.firestore();

const verbsRef = db.collection("verbs");

verbsRef.listDocuments().then(documentRefs => {
  console.log(documentRefs);
});
