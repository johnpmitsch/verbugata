import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { FaCheck } from "react-icons/fa";

const TenseInput = ({ person, checkAnswers, answer }) => {
  const [input, setInput] = useState(null);

  return (
    <div>
      <TextField
        error={checkAnswers && input !== answer}
        helperText={person}
        label={checkAnswers ? answer : null}
        onChange={e => setInput(e.target.value)}
        margin="normal"
      />
      {checkAnswers && input === answer && <FaCheck color="green" />}
    </div>
  );
};

export default TenseInput;
