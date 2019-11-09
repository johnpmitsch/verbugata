import { observer, inject } from "mobx-react";
import { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Router from "next/router";
import StartingForm from "../components/StartingForm";
import availableTenses from "../lib/tenses";

const Index = ({ verbStore }) => {
  const { setAmount, amount, setSelectedTenses, resetVerbList } = verbStore;

  // Need to add single input form and clean up data to support the imperativo tense
  const exclude = [
    "gerúndio",
    "particípio passado",
    "Imperativo Negativo",
    "Imperativo Afirmativo"
  ];

  setSelectedTenses(
    Object.keys(availableTenses).filter(x => !exclude.includes(x))
  );

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
