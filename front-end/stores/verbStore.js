import { observable, action, computed } from "mobx";

class VerbStore {
  @observable verbList = [];
  @observable currentVerbIndex = 0;

  @action setVerbList(verbList) {
    this.verbList = verbList;
  }

  @computed get currentVerb() {
    return this.verbList.length > 0
      ? this.verbList[this.currentVerbIndex]
      : null;
  }
}

export default VerbStore;
