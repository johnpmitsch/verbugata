import React from "react";
import Grid from "@material-ui/core/Grid";
import TenseInput from "./TenseInput";
import TenseInfo from "./TenseInfo";

const allPersons = ["eu", "nós", "tu", "vós", "ele/ela", "eles/elas"];
const firstPersonSingular = ["eu"];
const secondPerson = ["tu", "vós"];

const getPersons = (ptBr, imperativo) => {
  if (ptBr) return allPersons.filter(p => !secondPerson.includes(p));
  if (imperativo)
    return allPersons.filter(p => !firstPersonSingular.includes(p));
  return allPersons;
};

const TenseForm = ({
  conjugations,
  tense,
  checkAnswers,
  ptBr = true,
  imperativo = false
}) => {
  const persons = getPersons(ptBr, imperativo);
  const conjugation = conjugations[tense];

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
