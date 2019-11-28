import { observer, inject } from "mobx-react";
import { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import Router from "next/router";
import StartingForm from "../components/StartingForm";
import Welcome from "../components/Welcome";

const useStyles = makeStyles(theme => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(7)
  }
}));

const Index = ({ verbStore }) => {
  const {
    setAmount,
    amount,
    setSelectedTenses,
    resetVerbList,
    includeTu,
    toggleIncludeTu
  } = verbStore;

  const classes = useStyles();

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
        <Grid xs={10} md={6} item>
          <Welcome />
        </Grid>
        <StartingForm
          setSelectedTenses={setSelectedTenses}
          setAmount={setAmount}
          amount={amount}
          includeTu={includeTu}
          toggleIncludeTu={toggleIncludeTu}
        />
        <Fab
          variant="extended"
          color="primary"
          className={classes.fab}
          onClick={() =>
            Router.push({
              pathname: "/conjugate"
            })
          }
        >
          Start Practice
        </Fab>
      </Grid>
    </React.Fragment>
  );
};

export default inject("verbStore")(observer(Index));
