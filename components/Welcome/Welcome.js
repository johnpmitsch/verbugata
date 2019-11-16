import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormLabel from "@material-ui/core/FormLabel";

export default function Welcome() {
  return (
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
  );
}
