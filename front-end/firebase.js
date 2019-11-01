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

const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);

// Initialize Firebase
const conj = firebase.initializeApp(firebaseConfig);
const db = conj.firestore();

const verbsRef = db.collection("verbs");
const conjugationsRef = db.collection("conjugation");


const getVerb = (verbId) => {
  const verbRef = conjugationsRef.doc(verbId)

  verbRef.get().then(verb => {
    if (verb.exists) {
      return verb.data();
    } else {
      console.log("No such document!");
    }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });
}

console.log('hi')
verb_names = []
verbsRef.where("rank", "<", 25).get().then(verbs => {
  verbs.forEach(verb => {
    verb_names.push(verb.id);
  });
}).then(() => {
  randomized_names = shuffleArray(verb_names);
  random_name = randomized_names[0] ;
  console.log(random_name);
  console.log(getVerb(random_name));
}).finally(() => {
  process.exit(0)
});

