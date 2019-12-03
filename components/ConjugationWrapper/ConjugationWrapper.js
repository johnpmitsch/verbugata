import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TenseForm from "../TenseForm";

export default function ConjugationWrapper({
  submitAnswers,
  checkAnswers,
  selectedTenses,
  verbDetails,
  includeTu
}) {
  return (
    <React.Fragment>
      <form onSubmit={submitAnswers}>
        <Grid container justify={"center"} alignItems={"center"} spacing={5}>
          {selectedTenses.map((tense, i) => (
            <Grid key={i} item md={4} sm={6} xs={12}>
              <Card>
                <CardContent>
                  <TenseForm
                    checkAnswers={checkAnswers}
                    key={i}
                    tense={tense}
                    conjugations={verbDetails.conjugations[0]}
                    ptBr={!includeTu}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              {checkAnswers ? "Hide" : "Check"} Answers
            </Button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}
