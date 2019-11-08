import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { FaCheck } from "react-icons/fa";

const TenseInput = ({ person, checkAnswers, answer }) => {
  const [input, setInput] = useState(null);

  return (
    <React.Fragment>
      <Grid item sm={1}>
        {checkAnswers && input === answer && <FaCheck color="green" />}
      </Grid>
      <Grid item sm={5}>
        <TextField
          error={checkAnswers && input !== answer}
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
