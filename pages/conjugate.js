import { useState, useEffect } from "react";
import { observer, inject } from "mobx-react";
import Grid from "@material-ui/core/Grid";
import VerbInfoDisplay from "../components/VerbInfoDisplay";
import ConjugationWrapper from "../components/ConjugationWrapper";
import LoadingWrapper from "../components/LoadingWrapper";
import PageWrapper from "../components/PageWrapper";

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
    fetchVerbList,
    includeTu
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
    <PageWrapper>
      <LoadingWrapper condition={verbList.length > 0}>
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
                  includeTu={includeTu}
                />
              </LoadingWrapper>
            </Grid>
          </React.Fragment>
        )}
      </LoadingWrapper>
    </PageWrapper>
  );
};

export default inject("verbStore")(observer(Conjugate));
