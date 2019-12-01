import React from "react";
import Grid from "@material-ui/core/Grid";
import TenseInput from "./TenseInput";
import TenseInfo from "./TenseInfo";

const allPersons = ["eu", "nós", "tu", "vós", "ele/ela", "eles/elas"];

const secondPerson = ["tu", "vós"];

const TenseForm = ({ conjugations, tense, checkAnswers, ptBr = true }) => {
  const conjugation = conjugations[tense];
  const persons = ptBr
    ? allPersons.filter(p => !secondPerson.includes(p))
    : allPersons;

  return (
    <React.Fragment>
      <Grid container justify={"center"} alignItems={"center"} spacing={2}>
        <TenseInfo tense={tense} />
        {persons.map(
          (person, i) =>
            conjugation &&
            conjugation.hasOwnProperty(person) && (
              <TenseInput
                checkAnswers={checkAnswers}
                key={conjugation[person] + String(i)}
                person={person}
                answer={conjugation[person]}
              />
            )
        )}
      </Grid>
    </React.Fragment>
  );
};

export default TenseForm;
