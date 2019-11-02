import { observable, action, computed, flow } from "mobx";
import db from "../components/firebase";

class VerbStore {
  @observable verbList = [];
  @observable amount = 1000;
  @observable currentVerbIndex = 0;
  @observable loading = false;

  @action.bound setVerbList(verbList) {
    this.verbList = verbList;
  }

  @action.bound setAmount(amount) {
    this.amount = amount;
  }

  @computed get currentVerb() {
    return this.verbList.length > 0
      ? this.verbList[this.currentVerbIndex]
      : null;
  }

  fetchVerbList = flow(function*() {
    const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
    const verb_names = [];
    const verbsRef = db.collection("verbs");

    this.loading = true;
    try {
      const verbs = yield verbsRef.where("rank", "<=", this.amount).get();
      this.loading = false;
      verbs.forEach(verb => verb_names.push(verb.id));
      this.verbList = shuffleArray(verb_names);
    } catch (error) {
      console.error(error);
      this.loading = false;
    }
  }).bind(this);

  fetchConjugationList = flow(function*() {
    const conjugationRef = db.collection("conjugations");

    this.loading = true;
    try {
      const conjugation = yield verbsRef.doc(this.currentVerb()).get();
      console.log(conjugation);
    } catch (error) {
      console.error(error);
      this.loading = false;
    }
  }).bind(this);
}

export default VerbStore;
