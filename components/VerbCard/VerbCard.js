import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { withTheme } from "@material-ui/core/styles";
import { MdGTranslate } from "react-icons/md";

function VerbCard({ theme, verbName, title, regular, active = false }) {
  const getRegular = reg => {
    // using two equal signs to check for both null and undefined
    if (reg == null) {
      return String.fromCharCode(10240); // A blank space (braille unicode) to keep alignment
    }
    return reg ? "Regular" : "Irregular";
  };

  return (
    <Card>
      <CardContent>
        <Typography variant={active ? "subtitle1" : "subtitle2"}>
          {title}
        </Typography>
        <Typography variant={active ? "h4" : "h5"}>
          <b>{verbName}</b>
        </Typography>
        {active && (
          <React.Fragment>
            <a
              href={`https://translate.google.com/?um=1&ie=UTF-8&hl=en&client=tw-ob#pt/en/${verbName}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdGTranslate
                size={32}
                style={{
                  textDecoration: "none",
                  color: theme.palette.primary.light
                }}
              />
            </a>
            <Box fontWeight="fontWeightLight" fontStyle="italic">
              <Typography>{getRegular(regular)}</Typography>
            </Box>
          </React.Fragment>
        )}
      </CardContent>
    </Card>
  );
}
export default withTheme(VerbCard);
