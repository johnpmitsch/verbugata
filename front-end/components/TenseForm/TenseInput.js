import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const ValidationTextField = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "green",
      borderWidth: 2
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 2
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important" // override inline-style
    }
  }
})(TextField);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

const TenseInput = ({ person, checkAnswers, answer }) => {
  const [input, setInput] = useState(null);
  const classes = useStyles();

  return (
    <div>
      <FormControl>
        <ValidationTextField
          className={classes.margin}
          error={checkAnswers && input !== answer}
          helperText={person}
          label={checkAnswers ? answer : null}
          onChange={e => setInput(e.target.value)}
          underline={{
            "&:after": {
              borderBottom: `2px solid green`
            }
          }}
          margin="normal"
        />
      </FormControl>
    </div>
  );
};

export default TenseInput;
