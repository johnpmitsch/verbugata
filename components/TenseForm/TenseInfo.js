import React from "react";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { MdInfoOutline } from "react-icons/md";
import Box from "@material-ui/core/Box";
import availableTenses from "../../lib/tenses";

export default function TenseInfo({ tense }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <React.Fragment>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Box fontWeight="fontWeightBold">
          <Typography variant="subtitle1">{tense}</Typography>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <IconButton onClick={handleClick}>
          <MdInfoOutline size={12} />
        </IconButton>
        <Popover
          id={id}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
        >
          <div style={{ padding: "5px" }}>
            <Typography>{availableTenses[tense].english}</Typography>
            <Box fontStyle="italic">
              <Typography>{availableTenses[tense].example}</Typography>
            </Box>
          </div>
        </Popover>
      </Grid>
    </React.Fragment>
  );
}
