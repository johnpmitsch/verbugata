import { observable, action, computed, flow } from "mobx";
import db from "../components/firebase";
import VerbApi from "../lib/VerbApi";

class VerbStore {
  constructor() {}

  @observable verbList = [];
  @observable amount = 1000;
  @observable currentVerbIndex = 0;
  @observable conjugations = null;
  @observable selectedTenses = [];
  @observable verbDetails = {};

  @action.bound setVerbList(verbList) {
    this.verbList = verbList;
  }

  @action.bound setAmount(amount) {
    this.amount = amount;
  }

  @action.bound nextVerb() {
    if (this.currentVerbIndex + 1 < this.verbList.length) {
      this.currentVerbIndex += 1;
    }
  }

  @action.bound previousVerb() {
    if (this.currentVerbIndex - 1 >= 0) {
      this.currentVerbIndex -= 1;
    }
  }

  @action.bound setSelectedTenses(selectedTenses) {
    this.selectedTenses = selectedTenses;
  }

  @action.bound resetVerbDetails() {
    this.conjugations = null;
    this.verbDetails = {};
  }

  @action.bound resetVerbList() {
    this.verbList = [];
    this.currentVerbIndex = 0;
    this.resetVerbDetails();
  }

  @computed get currentVerb() {
    return this.verbList.length > 0
      ? this.verbList[this.currentVerbIndex]
      : null;
  }

  fetchVerbList = flow(function*() {
    const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
    try {
      const allVerbs = yield new VerbApi().getVerbs(this.amount);
      this.verbList = shuffleArray(allVerbs.map(v => v.verb));
    } catch (error) {
      console.error(error);
    }
  }).bind(this);

  fetchVerbDetails = flow(function*() {
    if (!this.currentVerb) return;
    try {
      const verbDetails = yield new VerbApi().getVerbDetails(this.currentVerb);
      console.log(verbDetails);
      if (verbDetails.length > 0) this.verbDetails = verbDetails[0];
    } catch (error) {
      console.error(error);
    }
  }).bind(this);

  fetchConjugations = flow(function*() {
    if (!this.currentVerb) return;
    try {
      const conjugations = yield new VerbApi().getConjugations(
        this.currentVerb
      );
      const conjugations = yield conjugationRef.doc(this.currentVerb).get();
      this.conjugations = conjugations.data();
    } catch (error) {
      console.error(error);
    }
  }).bind(this);
}

export default VerbStore;
