import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "api-key",
  authDomain: "conjugation-practice.firebaseapp.com",
  databaseURL: "https://conjugation-practice.firebaseio.com",
  projectId: "conjugation-practice",
  storageBucket: "conjugation-practice.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id"
};

class FirestoreDatabase {
  constructor() {
    const app = firebase.initializeApp(firebaseConfig);
    this.db = app.firestore();
  }
}

export default FirestoreDatabase;
