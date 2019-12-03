import React from "react";
import Grid from "@material-ui/core/Grid";
import TenseInfo from "./TenseInfo";
import MultipleTenses from "./MultipleTenses";
import SingleTense from "./SingleTense";

const getPersons = ptBr => {
  const allPersons = ["eu", "nós", "tu", "vós", "ele/ela", "eles/elas"];
  const secondPerson = ["tu", "vós"];
  if (ptBr) return allPersons.filter(p => !secondPerson.includes(p));
  return allPersons;
};

const TenseForm = ({ conjugations, tense, checkAnswers, ptBr = true }) => {
  const persons = getPersons(ptBr);
  const conjugation = conjugations[tense];

  const singleTense = currentTense => {
    const singleTenses = ["Gerúndio", "Particípio Passado"];
    return singleTenses.includes(currentTense);
  };

  return (
    <React.Fragment>
      <Grid container justify={"center"} alignItems={"center"} spacing={2}>
        <TenseInfo tense={tense} />
        {singleTense(tense) ? (
          <SingleTense
            conjugation={conjugation}
            tense={tense}
            checkAnswers={checkAnswers}
          />
        ) : (
          <MultipleTenses
            persons={persons}
            conjugation={conjugation}
            checkAnswers={checkAnswers}
          />
        )}
      </Grid>
    </React.Fragment>
  );
};

export default TenseForm;
