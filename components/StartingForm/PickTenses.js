import React, { useState, useEffect } from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import tenses from "../../lib/tenses";

export default function PickTenses({ setSelectedTenses }) {
  const [checked, setChecked] = useState({ Presente: true });
  const [allTenses, setAllTenses] = useState([]);

  // Need to add single input form and clean up data to support the imperativo tense
  const exclude = [
    "gerúndio",
    "particípio passado",
    "Imperativo Negativo",
    "Imperativo Afirmativo"
  ];

  const handleChange = name => event => {
    setChecked({ ...checked, [name]: event.target.checked });
  };

  useEffect(() => {
    setAllTenses(Object.keys(tenses));
  }, []);

  useEffect(() => {
    const filteredTenses = Object.keys(checked)
      .filter(t => checked[t])
      .filter(x => !exclude.includes(x));
    setSelectedTenses(filteredTenses);
  });

  return (
    <FormControl component="fieldset" className="pick-tense-form">
      <Grid item xs={12} style={{ paddingBottom: "20px" }}>
        <FormLabel component="legend">
          <Typography variant={"h5"}>Pick Tenses</Typography>
        </FormLabel>
      </Grid>
      <FormGroup>
        <Grid
          container
          justify="flex-start"
          alignItems="flex-start"
          spacing={5}
        >
          {allTenses.map((tense, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={tense + String(i)}
              style={{ textAlign: "left" }}
            >
              <Card>
                <CardContent>
                  <FormHelperText>{tenses[tense].english}</FormHelperText>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={!!checked[tense]}
                        onChange={handleChange(tense)}
                        value={tense}
                      />
                    }
                    style={{ textAlign: "left" }}
                    label={<b>{tense}</b>}
                  />
                  <FormHelperText>{tenses[tense].example}</FormHelperText>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </FormGroup>
    </FormControl>
  );
}
