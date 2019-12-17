import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import {
  FaRegCheckCircle as Correct,
  FaRegTimesCircle as Incorrect,
  FaRegCircle
} from "react-icons/fa";

const TenseInput = ({
  text,
  checkAnswers,
  answer,
  tabIndex,
  disabled = false
}) => {
  const [input, setInput] = useState(null);

  const checkAnswer = (user, userAnswer) => {
    if (user && answer) {
      return user.toLowerCase().trim() === userAnswer.toLowerCase();
    }
    return false;
  };

  const validationIcon = (show, correct) => {
    if (show) {
      return correct ? <Correct color="green" /> : <Incorrect color="red" />;
    }
    return <FaRegCircle color={"gainsboro"} />;
  };

  return (
    <React.Fragment>
      <Grid item xs={1}>
        {validationIcon(checkAnswers, checkAnswer(input, answer))}
      </Grid>

      <Grid item xs={5}>
        <TextField
          disabled={disabled}
          error={checkAnswers && !checkAnswer(input, answer)}
          helperText={disabled ? "-" : text}
          label={checkAnswers ? answer : " "}
          onChange={e => setInput(e.target.value)}
          inputProps={{ spellCheck: false, tabIndex }}
          margin="normal"
        />
      </Grid>
    </React.Fragment>
  );
};

export default TenseInput;
