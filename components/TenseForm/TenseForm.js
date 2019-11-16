import React from "react";
import Grid from "@material-ui/core/Grid";
import TenseInput from "./TenseInput";
import TenseInfo from "./TenseInfo";

let persons = ["eu", "tu", "você", "nós", "vós", "eles"];

const secondPerson = ["tu", "vós"];

const TenseForm = ({ conjugations, tense, checkAnswers, ptBr = true }) => {
  const conjugation = conjugations[tense];
  if (ptBr) persons = persons.filter(p => !secondPerson.includes(p));

  const organizeRows = conj => {
    const columns = { left: [], right: [] };
    persons.map((person, i) => {
      if (conj && conj.hasOwnProperty(person)) {
        columns[i % 2 === 0 ? "left" : "right"].push(
          <TenseInput
            checkAnswers={checkAnswers}
            key={conj[person] + String(i)}
            person={person}
            answer={conj[person]}
          />
        );
      }
    });
    return columns;
  };

  const organizedRows = organizeRows(conjugation);

  return (
    <React.Fragment>
      <Grid container justify={"center"} alignItems={"center"} spacing={2}>
        <TenseInfo tense={tense} />
        {organizedRows.left}
        {organizedRows.right}
      </Grid>
    </React.Fragment>
  );
};

export default TenseForm;
