import { observable, action } from "mobx";
import { useStaticRendering } from "mobx-react";
import VerbStore from "./verbStore";

const isServer = typeof window === "undefined";
useStaticRendering(isServer);

class Store {
  constructor() {
    this.verbStore = new VerbStore();
  }
  @observable lastUpdate = 0;
  @observable light = false;

  hydrate(serializedStore) {
    this.lastUpdate =
      serializedStore.lastUpdate != null
        ? serializedStore.lastUpdate
        : Date.now();
    this.light = !!serializedStore.light;
  }

  @action start = () => {
    this.timer = setInterval(() => {
      this.lastUpdate = Date.now();
      this.light = true;
    }, 1000);
  };

  stop = () => clearInterval(this.timer);
}

export async function fetchInitialStoreState() {
  // You can do anything to fetch initial store state
  return {};
}

export default Store;
