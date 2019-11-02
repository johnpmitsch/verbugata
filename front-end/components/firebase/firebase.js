import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "api-key",
  authDomain: "conjugation-practice.firebaseapp.com",
  databaseURL: "https://conjugation-practice.firebaseio.com",
  projectId: "conjugation-practice",
  appId: "conjugation-practice"
};

export default !firebase.apps.length
  ? firebase.initializeApp(config).firestore()
  : firebase.app().firestore();
