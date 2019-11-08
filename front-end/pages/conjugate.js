import { useState, useEffect } from "react";
import { observer, inject } from "mobx-react";
import { useRouter } from "next/router";
import Grid from "@material-ui/core/Grid";
import VerbInfoDisplay from "../components/VerbInfoDisplay";
import ConjugationWrapper from "../components/ConjugationWrapper";

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
    conjugations,
    resetLoading,
    resetVerbDetails
  } = verbStore;

  const router = useRouter();

  // Ensure loading stops when conjugation is loaded
  useEffect(() => {
    resetLoading();
  }, [conjugations]);

  useEffect(() => {
    if (currentVerb && !conjugations) {
      fetchConjugations();
    }
  }, []);

  useEffect(() => {
    if (currentVerb !== verbDetails.verb) {
      fetchVerbDetails();
    }
  });

  // If page is refreshed, state is lost and need to go back to form
  if (verbList.length <= 0) {
    // Since we are using SSR, check if client before redirecting
    const isClient = typeof window !== "undefined";
    if (isClient) router.push({ pathname: "/" });
  }

  const getNextVerb = () => {
    resetVerbDetails();
    setCheckAnswers(false);
    nextVerb();
    fetchConjugations();
  };

  const submitAnswers = e => {
    setCheckAnswers(!checkAnswers);
    e.preventDefault();
  };

  return (
    <Grid container justify={"center"} alignItems={"center"} spacing={5}>
      {verbList.length > 0 && currentVerbIndex < verbList.length ? (
        <React.Fragment>
          <Grid item xs={12}>
            <VerbInfoDisplay
              currentVerbIndex={currentVerbIndex}
              currentVerb={currentVerb}
              verbList={verbList}
              verbDetails={verbDetails}
              getNextVerb={getNextVerb}
            />
          </Grid>
          <Grid item xs={12}>
            {conjugations && verbDetails && (
              <ConjugationWrapper
                submitAnswers={submitAnswers}
                checkAnswers={checkAnswers}
                selectedTenses={selectedTenses}
                conjugations={conjugations}
              />
            )}
          </Grid>
        </React.Fragment>
      ) : (
        <div>Congratulations! You finished all the verbs in the list!</div>
      )}
    </Grid>
  );
};

export default inject("verbStore")(observer(Conjugate));
