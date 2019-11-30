import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  grid: {
    margin: theme.spacing(0),
    flexGrow: 0,
    maxWidth: `100%`,
    flexBasis: `100%`
  }
}));

const PageWrapper = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={5}
      className={classes.grid}
    >
      {children}
    </Grid>
  );
};

export default PageWrapper;
