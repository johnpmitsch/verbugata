import { observable, action, computed, flow } from "mobx";
import VerbApi from "../lib/VerbApi";

class VerbStore {
  @observable verbList = [];
  @observable amount = 1000;
  @observable currentVerbIndex = 0;
  @observable selectedTenses = [];
  @observable verbDetails = {};
  @observable includeTu = false;

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
    this.verbDetails = {};
  }

  @action.bound resetVerbList() {
    this.verbList = [];
    this.currentVerbIndex = 0;
    this.resetVerbDetails();
  }

  @action.bound toggleIncludeTu() {
    this.includeTu = !this.includeTu;
  }

  @computed get currentVerb() {
    return this.verbList.length > 0
      ? this.verbList[this.currentVerbIndex]
      : null;
  }

  // eslint-disable-next-line func-names
  fetchVerbList = flow(function*() {
    const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
    try {
      const allVerbs = yield new VerbApi().getVerbs(this.amount);
      this.verbList = shuffleArray(allVerbs.map(v => v.verb));
    } catch (error) {
      console.error(error);
    }
  }).bind(this);

  // eslint-disable-next-line func-names
  fetchVerbDetails = flow(function*() {
    if (!this.currentVerb) return;
    try {
      const details = yield new VerbApi().getVerbDetails(this.currentVerb);
      this.verbDetails = details[0];
    } catch (error) {
      console.error(error);
    }
  }).bind(this);
}

export default VerbStore;
