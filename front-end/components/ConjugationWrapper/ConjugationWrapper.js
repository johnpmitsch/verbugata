import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TenseForm from "../TenseForm";

export default function ConjugationWrapper({
  submitAnswers,
  checkAnswers,
  selectedTenses,
  conjugations
}) {
  return (
    <React.Fragment>
      <form onSubmit={submitAnswers}>
        <Grid container justify={"center"} alignItems={"center"} spacing={5}>
          {selectedTenses.map((tense, i) => (
            <Grid item md={4} sm={6} xs={12}>
              <TenseForm
                checkAnswers={checkAnswers}
                key={i}
                tense={tense}
                conjugations={conjugations["conjugations"]}
              />
            </Grid>
          ))}
          <Button type="submit" variant="contained" color="primary">
            {checkAnswers ? "Hide" : "Check"} Answers
          </Button>
        </Grid>
      </form>
    </React.Fragment>
  );
}
