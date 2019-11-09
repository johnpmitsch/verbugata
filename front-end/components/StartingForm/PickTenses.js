import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

export default function PickTenses() {
  let checked = false;
  const handleChange = name => {
    checked = !checked;
  };
  return (
    <FormControl component="fieldset" className="pick-tense-form">
      <FormLabel component="legend">Assign responsibility</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={handleChange("gilad")}
              value="gilad"
            />
          }
          label="Gilad Gray"
        />
      </FormGroup>
    </FormControl>
  );
}
