import { observer, inject } from "mobx-react";
import { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
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
