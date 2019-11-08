import Grid from "@material-ui/core/Grid";
import TenseInput from "./TenseInput";

let persons = ["eu", "nós", "tu", "vós", "você", "eles"];

const second_person = ["tu", "vós"];

const TenseForm = ({ conjugations, tense, checkAnswers, pt_br = true }) => {
  const conjugation = conjugations[tense];
  if (pt_br) persons = persons.filter(p => !second_person.includes(p));

  return (
    <Grid container justify={"center"} alignItems={"center"} spacing={2}>
      <Grid item xs={12}>
        <b>{tense}</b>
      </Grid>
      {persons.map((person, i) => (
        <TenseInput
          checkAnswers={checkAnswers}
          key={conjugation[person] + String(i)}
          person={person}
          answer={conjugation[person]}
        />
      ))}
    </Grid>
  );
};

export default TenseForm;
