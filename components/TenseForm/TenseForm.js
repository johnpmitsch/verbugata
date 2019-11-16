import Grid from "@material-ui/core/Grid";
import TenseInput from "./TenseInput";
import TenseInfo from "./TenseInfo";

let persons = ["eu", "nós", "tu", "vós", "você", "eles"];

const secondPerson = ["tu", "vós"];

const TenseForm = ({ conjugations, tense, checkAnswers, ptBr = true }) => {
  const conjugation = conjugations[tense];
  if (ptBr) persons = persons.filter(p => !secondPerson.includes(p));

  return (
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
  );
};

export default TenseForm;
