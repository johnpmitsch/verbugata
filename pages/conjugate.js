import { useState, useEffect } from "react";
import { observer, inject } from "mobx-react";
import Grid from "@material-ui/core/Grid";
import VerbInfoDisplay from "../components/VerbInfoDisplay";
import ConjugationWrapper from "../components/ConjugationWrapper";
import LoadingWrapper from "../components/LoadingWrapper";

const Conjugate = ({ verbStore }) => {
  const [checkAnswers, setCheckAnswers] = useState(false);

  const {
    verbList,
    currentVerb,
    currentVerbIndex,
    selectedTenses,
    nextVerb,
    previousVerb,
    verbDetails,
    fetchVerbDetails,
    resetVerbDetails,
    fetchVerbList
  } = verbStore;

  useEffect(() => {
    fetchVerbList();
  }, []);

  useEffect(() => {
    if (currentVerb) {
      resetVerbDetails();
      setCheckAnswers(false);
      fetchVerbDetails();
    }
  }, [currentVerb]);

  const submitAnswers = e => {
    e.preventDefault();
    setCheckAnswers(!checkAnswers);
  };

  return (
    <LoadingWrapper condition={verbList.length > 0}>
      <Grid container justify={"center"} alignItems={"center"} spacing={5}>
        {currentVerbIndex < verbList.length && (
          <React.Fragment>
            <Grid item xs={12}>
              <VerbInfoDisplay
                currentVerbIndex={currentVerbIndex}
                currentVerb={currentVerb}
                verbList={verbList}
                verbDetails={verbDetails}
                getNextVerb={nextVerb}
                getPreviousVerb={previousVerb}
              />
            </Grid>
            <Grid item xs={12}>
              <LoadingWrapper condition={verbDetails.verb}>
                <ConjugationWrapper
                  submitAnswers={submitAnswers}
                  checkAnswers={checkAnswers}
                  selectedTenses={selectedTenses}
                  verbDetails={verbDetails}
                />
              </LoadingWrapper>
            </Grid>
          </React.Fragment>
        )}
      </Grid>
    </LoadingWrapper>
  );
};

export default inject("verbStore")(observer(Conjugate));
