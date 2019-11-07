import { useState, useEffect } from "react";
import { observer, inject } from "mobx-react";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";
import TenseForm from "../components/TenseForm";

const Conjugate = ({ verbStore }) => {
  const [checkAnswers, setCheckAnswers] = useState(false);

  const {
    verbList,
    currentVerb,
    currentVerbIndex,
    fetchConjugations,
    selectedTenses,
    nextVerb,
    verbDetails,
    fetchVerbDetails,
    conjugations
  } = verbStore;

  const router = useRouter();

  useEffect(() => {
    if (currentVerb && !conjugations) {
      fetchConjugations();
      fetchVerbDetails();
    }
  }, []);

  // If page is refreshed, state is lost and need to go back to form
  if (verbList.length <= 0) {
    // Since we are using SSR, check if client before redirecting
    const isClient = typeof window !== "undefined";
    if (isClient) router.push({ pathname: "/" });
  }

  const getNextVerb = () => {
    setCheckAnswers(false);
    nextVerb();
    fetchConjugations(currentVerb);
  };

  const submitAnswers = e => {
    setCheckAnswers(!checkAnswers);
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <div>Verbs Loaded: {verbList.length}</div>
      {verbList.length > 0 && currentVerbIndex < verbList.length ? (
        <div>
          {currentVerbIndex > 0 && (
            <div>Previous Verb: {verbList[currentVerbIndex - 1]}</div>
          )}
          <div>
            Current Verb: <b>{currentVerb}</b>
          </div>
          <a
            href={`https://translate.google.com/?um=1&ie=UTF-8&hl=en&client=tw-ob#pt/en/${currentVerb}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Translate
          </a>
          {currentVerbIndex + 1 < verbList.length && (
            <div>Next Verb: {verbList[currentVerbIndex + 1]}</div>
          )}
          {conjugations && verbDetails && (
            <React.Fragment>
              <div>
                Type: {verbDetails["regular"] ? "regular" : "irregular"}
              </div>
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
          )}
        </div>
      ) : (
        <div>Congratulations! You finished all the verbs in the list!</div>
      )}
      <Button variant="contained" color="primary" onClick={() => getNextVerb()}>
        Next Verb
      </Button>
    </React.Fragment>
  );
};

export default inject("verbStore")(observer(Conjugate));
