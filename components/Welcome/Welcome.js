import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Brazil from "../icons/Brazil";
import Portugal from "../icons/Portugual";

// #2f7373 for app bar
// #80AFAF for Brazil logo
export default function Welcome() {
  return (
    <Paper style={{ padding: "50px" }}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        <Grid xs={12}>
          <FormLabel component="legend">
            <Typography variant="h5" component="legend">
              Portuguese Verb Conjugation Practice
            </Typography>
          </FormLabel>
        </Grid>
        <Grid xs={2}></Grid>
        <Grid xs={4}>
          <Brazil size="8em" fill={"#80AFAF"} />
        </Grid>
        <Grid xs={4}>
          <Portugal size="7em" fill={"#80AFAF"} />
        </Grid>
        <Grid xs={2}></Grid>
        <Grid xs={12}>
          <Typography variant="body1">
            Verbugata is a tool to help practice conjugating Portuguese verbs.
            Select the options and start practicing!
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
