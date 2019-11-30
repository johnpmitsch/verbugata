import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function Options({ includeTu, toggleIncludeTu }) {
  return (
    <div style={{ margin: "20px 0px" }}>
      <FormControlLabel
        control={
          <Switch
            checked={includeTu}
            onChange={toggleIncludeTu}
            color="secondary"
            value="includeTu"
          />
        }
        label="Include tu/vós?"
      />
    </div>
  );
}
