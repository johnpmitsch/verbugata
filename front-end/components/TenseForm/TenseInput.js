import { useState } from "react";
import FormControl from "@material-ui/core/FormControl";

const TenseInput = ({ person, checkAnswers, answer }) => {
  const [input, setInput] = useState(null);

  return (
    <div>
      <FormControl>
        <TextField
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
