import Button from "@material-ui/core/Button";
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
        {selectedTenses.map((tense, i) => (
          <TenseForm
            checkAnswers={checkAnswers}
            key={i}
            tense={tense}
            conjugations={conjugations["conjugations"]}
          />
        ))}
        <Button type="submit" variant="contained" color="primary">
          {checkAnswers ? "Hide" : "Check"} Answers
        </Button>
      </form>
    </React.Fragment>
  );
}
