import TenseInput from "./TenseInput";

let persons = ["eu", "tu", "você", "nós", "vós", "eles"];
const second_person = ["tu", "vós"];

const TenseForm = ({ conjugations, tense, checkAnswers, pt_br = true }) => {
  const conjugation = conjugations[tense];
  if (pt_br) persons = persons.filter(p => !second_person.includes(p));

  return (
    <div>
      <b>{tense}</b>
      {persons.map((person, i) => (
        <TenseInput
          checkAnswers={checkAnswers}
          key={conjugation[person] + String(i)}
          person={person}
          answer={conjugation[person]}
        />
      ))}
    </div>
  );
};

export default TenseForm;
