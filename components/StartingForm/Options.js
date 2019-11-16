import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function Options({ includeTu, toggleIncludeTu }) {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={includeTu}
          onChange={toggleIncludeTu}
          color="primary"
          value="includeTu"
        />
      }
      label="Include tu/vós?"
    />
  );
}
