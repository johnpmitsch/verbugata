import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

const Index = () => {
  const [numberOfVerbs, setNumberOfVerbs] = useState(1000);
  const [selectedVerbs, setSelectedVerbs] = useState([]);
  let db;

  const handleNumberOfVerbsChange = event => {
    setNumberOfVerbs(event.target.value);
  };

  const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);

  const getVerbs = () => {
    if (!db) {
      let firebaseConfig = {
        apiKey: "api-key",
        authDomain: "conjugation-practice.firebaseapp.com",
        databaseURL: "https://conjugation-practice.firebaseio.com",
        projectId: "conjugation-practice",
        storageBucket: "conjugation-practice.appspot.com",
        messagingSenderId: "sender-id",
        appId: "app-id",
        measurementId: "G-measurement-id"
      };

      // Initialize Firebase
      const fb = firebase.initializeApp(firebaseConfig);
      db = fb.firestore();
    }

    const verbsRef = db.collection("verbs");
    const conjugationsRef = db.collection("conjugation");

    const verb_names = [];
    verbsRef
      .where("rank", "<=", numberOfVerbs)
      .get()
      .then(verbs => {
        verbs.forEach(verb => {
          verb_names.push(verb.id);
        });
      })
      .then(() => {
        const randomizedNames = shuffleArray(verb_names);
        setSelectedVerbs(randomizedNames);
      });
  };

  return (
    <div>
      <div>{selectedVerbs.join(", ")}</div>
      <div>{numberOfVerbs}</div>
      <Grid container direction="row" justify="center" alignItems="center">
        <FormControl>
          <InputLabel shrink id="number-of-verbs-labell">
            Number of Verbs
          </InputLabel>
          <Select
            labelId="number-of-verbs-labell"
            id="number-of-verbs"
            value={numberOfVerbs}
            onChange={handleNumberOfVerbsChange}
          >
            <MenuItem value={10}>Top 10</MenuItem>
            <MenuItem value={25}>Top 25</MenuItem>
            <MenuItem value={50}>Top 50</MenuItem>
            <MenuItem value={100}>Top 100</MenuItem>
            <MenuItem value={500}>Top 500</MenuItem>
            <MenuItem value={1000}>Top 1000</MenuItem>
          </Select>
          <FormHelperText>Number of Verbs to use</FormHelperText>
        </FormControl>
        <Button variant="contained" color="primary" onClick={() => getVerbs()}>
          Start Practice
        </Button>
      </Grid>
    </div>
  );
};

export default Index;
