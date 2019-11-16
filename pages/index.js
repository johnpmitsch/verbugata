import { observer, inject } from "mobx-react";
import { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormLabel from "@material-ui/core/FormLabel";
import Router from "next/router";
import StartingForm from "../components/StartingForm";

const Index = ({ verbStore }) => {
  const {
    setAmount,
    amount,
    setSelectedTenses,
    resetVerbList,
    includeTu,
    toggleIncludeTu
  } = verbStore;

  useEffect(() => {
    resetVerbList();
  }, []);

  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        <Grid xs={10} md={6}>
          <Paper style={{ padding: "20px" }}>
            <FormLabel component="legend">
              <Typography variant="h5" component="legend">
                Portuguese Verb Conjugation Practice
              </Typography>
            </FormLabel>
            <Typography variant="p">
              Verbugata is a tool to help practice conjugating Portuguese verbs.
              Select the options and start practicing!
            </Typography>
          </Paper>
        </Grid>
        <StartingForm
          setSelectedTenses={setSelectedTenses}
          setAmount={setAmount}
          amount={amount}
          includeTu={includeTu}
          toggleIncludeTu={toggleIncludeTu}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            Router.push({
              pathname: "/conjugate"
            })
          }
        >
          Start Practice
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default inject("verbStore")(observer(Index));
