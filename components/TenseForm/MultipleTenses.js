import TenseInput from "./TenseInput";

export default function MultipleTenses({
  persons,
  conjugation,
  checkAnswers,
  tabOffset
}) {
  return (
    <React.Fragment>
      {persons.map(
        ([person, i]) =>
          conjugation && (
            <TenseInput
              checkAnswers={conjugation.hasOwnProperty(person) && checkAnswers}
              key={conjugation[person] + String(i)}
              text={person}
              answer={conjugation[person]}
              disabled={!conjugation.hasOwnProperty(person)}
              tabIndex={tabOffset + i}
            />
          )
      )}
    </React.Fragment>
  );
}
