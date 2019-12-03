import TenseInput from "./TenseInput";

export default function SingleTense({ conjugation, tense, checkAnswers }) {
  return (
    <TenseInput text={tense} checkAnswers={checkAnswers} answer={conjugation} />
  );
}
