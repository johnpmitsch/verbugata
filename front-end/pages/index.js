import { useState } from "react";
import { observer, inject } from "mobx-react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Router from "next/router";

const Index = ({ verbStore }) => {
  const [numberOfVerbs, setNumberOfVerbs] = useState(1000);

  const handleNumberOfVerbsChange = event => {
    setNumberOfVerbs(event.target.value);
  };

  const getVerbs = numberOfVerbs => {
    verbStore.setVerbList(["ser", "estar"]);

    Router.push({
      pathname: "/conjugate"
    });
  };

  //const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
  //const getVerbs = (numberOfVerbs, db) => {
  //  const verb_names = [];
  //  const verbsRef = db.collection("verbs");

  //  verbsRef
  //    .where("rank", "<=", numberOfVerbs)
  //    .get()
  //    .then(verbs => {
  //      verbs.forEach(verb => {
  //        verb_names.push(verb.id);
  //      });
  //    })
  //    .then(() => {
  //      shuffleArray(verb_names);
  //      setSelectedVerbs(randomizedNames);
  //      /**Router.push(
  //      {
  //        pathname: "/conjugate",
  //        query: { selectedVerbs: selectedVerbs }
  //      },
  //      "/conjugate"
  //    );**/
  //    });
  //};

  return (
    <React.Fragment>
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
          <FormHelperText>Verbs to use in the exercise</FormHelperText>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => getVerbs(numberOfVerbs)}
        >
          Start Practice
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default inject("verbStore")(observer(Index));
