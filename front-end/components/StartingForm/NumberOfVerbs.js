import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

export default function NumberOfVerbs({ amount, setAmount }) {
  return (
    <FormControl>
      <InputLabel shrink id="number-of-verbs-labell">
        Number of Verbs
      </InputLabel>
      <Select
        labelId="number-of-verbs-labell"
        id="number-of-verbs"
        value={amount}
        onChange={event => setAmount(event.target.value)}
      >
        <MenuItem value={10}>Top 10</MenuItem>
        <MenuItem value={25}>Top 25</MenuItem>
        <MenuItem value={50}>Top 50</MenuItem>
        <MenuItem value={100}>Top 100</MenuItem>
        <MenuItem value={500}>Top 500</MenuItem>
        <MenuItem value={1000}>Top 1000</MenuItem>
      </Select>
      <FormHelperText>Verbs to use in the exercise</FormHelperText>
    </FormControl>
  );
}
