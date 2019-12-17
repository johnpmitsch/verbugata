import TenseInput from "./TenseInput";

export default function SingleTense({
  conjugation,
  tense,
  checkAnswers,
  tabOffset
}) {
  return (
    <TenseInput
      text={tense}
      checkAnswers={checkAnswers}
      answer={conjugation}
      tabIndex={tabOffset}
    />
  );
}
