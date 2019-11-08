import { observer, inject } from "mobx-react";
import { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Router from "next/router";

const mockSelectedTenses = [
  "Presente",
  "Pretérito Perfeito",
  "Pretérito Imperfeito",
  "Subjuntivo Presente"
];

const Index = ({ verbStore }) => {
  const {
    setAmount,
    amount,
    fetchVerbList,
    loading,
    setSelectedTenses,
    resetVerbList
  } = verbStore;

  setSelectedTenses(mockSelectedTenses);

  useEffect(() => {
    resetVerbList();
  }, []);

  const getVerbs = () => {
    fetchVerbList().then(() => {
      Router.push({
        pathname: "/conjugate"
      });
    });
  };

  return (
    <React.Fragment>
      <div>{amount}</div>
      <Grid container direction="row" justify="center" alignItems="center">
        <FormControl>
          <InputLabel shrink id="number-of-verbs-labell">
            Number of Verbs
          </InputLabel>
          <Select
            labelId="number-of-verbs-labell"
            id="number-of-verbs"
            value={amount}
            onChange={event => setAmount(event.target.value)}
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
          disabled={loading}
          variant="contained"
          color="primary"
          onClick={() => getVerbs()}
        >
          Start Practice
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default inject("verbStore")(observer(Index));
