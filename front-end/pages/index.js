import { observer, inject } from "mobx-react";
import { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Router from "next/router";
import StartingForm from "../components/StartingForm";

const mockSelectedTenses = [
  "Presente",
  "Pretérito Perfeito",
  "Pretérito Imperfeito",
  "Subjuntivo Presente"
];

const Index = ({ verbStore }) => {
  const { setAmount, amount, setSelectedTenses, resetVerbList } = verbStore;

  setSelectedTenses(mockSelectedTenses);

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
        <StartingForm setAmount={setAmount} amount={amount} />
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
