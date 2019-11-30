import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import { withTheme } from "@material-ui/core/styles";
import Brazil from "../icons/Brazil";
import Portugal from "../icons/Portugual";

// #2f7373 for app bar
// #80AFAF for Brazil logo
function Welcome({ theme }) {
  return (
    <Paper style={{ padding: "20px" }}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid xs={12} item>
          <FormLabel component="legend">
            <Typography variant="h5" component="legend">
              Portuguese Verb Conjugation Practice
            </Typography>
          </FormLabel>
        </Grid>
        <Grid xs={2} item></Grid>
        <Grid xs={4} item>
          <Brazil size="8em" fill={theme.palette.primary.light} />
        </Grid>
        <Grid xs={4} item>
          <Portugal size="7em" fill={theme.palette.primary.light} />
        </Grid>
        <Grid xs={2} item></Grid>
        <Grid xs={12} item>
          <Typography variant="body1">
            Verbugata is a tool to help practice conjugating Portuguese verbs.
            Select the options and start practicing!
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default withTheme(Welcome);
