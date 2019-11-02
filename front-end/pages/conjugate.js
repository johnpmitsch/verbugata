import { observer, inject } from "mobx-react";

const Conjugate = ({ verbStore }) => {
  return (
    <React.Fragment>
      <div>All verbs: {verbStore.verbList.join(", ")}</div>
      <div>Current verb: {verbStore.currentVerb}</div>
    </React.Fragment>
  );
};

export default inject("verbStore")(observer(Conjugate));
