import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { FaCheck } from "react-icons/fa";

const TenseInput = ({ person, checkAnswers, answer }) => {
  const [input, setInput] = useState(null);

  const checkAnswer = (user, answer) => {
    if (user && answer) {
      return user.toLowerCase() === answer.toLowerCase();
    } else {
      return false;
    }
  };
  return (
    <React.Fragment>
      <Grid item sm={1}>
        {checkAnswers && checkAnswer(input, answer) && (
          <FaCheck color="green" />
        )}
      </Grid>
      <Grid item sm={5}>
        <TextField
          error={checkAnswers && !checkAnswer(input, answer)}
          helperText={person}
          label={checkAnswers ? answer : null}
          onChange={e => setInput(e.target.value)}
          margin="normal"
        />
      </Grid>
    </React.Fragment>
  );
};

export default TenseInput;