import { observable, action, computed, flow } from "mobx";
import db from "../components/firebase";

class VerbStore {
  @observable verbList = [];
  @observable amount = 1000;
  @observable currentVerbIndex = 0;
  @observable loading = false;
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
    this.currentVerbIndex += 1;
  }

  @action.bound setSelectedTenses(selectedTenses) {
    this.selectedTenses = selectedTenses;
  }

  @action.bound resetLoading() {
    this.loading = false;
  }

  @action.bound resetVerbList() {
    this.verbList = [];
    this.currentVerbIndex = 0;
    this.conjugations = null;
    this.verbDetails = {};
    this.loading = false;
  }

  @computed get currentVerb() {
    return this.verbList.length > 0
      ? this.verbList[this.currentVerbIndex]
      : null;
  }

  fetchVerbList = flow(function*() {
    const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
    const verb_names = [];
    const listsRef = db.collection("lists");
    this.loading = true;
    try {
      const allVerbsDoc = yield listsRef.doc("verbs").get();
      this.loading = false;
      const allVerbs = allVerbsDoc.data()["all"];
      allVerbs.slice(0, this.amount).forEach(verb => verb_names.push(verb));
      this.verbList = shuffleArray(verb_names);
    } catch (error) {
      console.error(error);
      this.loading = false;
    }
  }).bind(this);

  fetchVerbDetails = flow(function*() {
    const verbDetailRef = db.collection("verbs");
    this.loading = true;
    try {
      const verbDetails = yield verbDetailRef.doc(this.currentVerb).get();
      this.loading = false;
      this.verbDetails = verbDetails.data();
    } catch (error) {
      console.error(error);
      this.loading = false;
    }
  }).bind(this);

  fetchConjugations = flow(function*() {
    const conjugationRef = db.collection("conjugation");
    this.loading = true;
    try {
      const conjugations = yield conjugationRef.doc(this.currentVerb).get();
      this.conjugations = conjugations.data();
    } catch (error) {
      console.error(error);
      this.loading = false;
    }
  }).bind(this);
}

export default VerbStore;
