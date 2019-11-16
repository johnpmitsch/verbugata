const asyncFetch = async url => {
  // eslint-disable-next-line no-undef
  const response = await fetch(url);
  if (response.ok) {
    const resjson = await response.json();
    return resjson;
  }
  throw new Error(response.status);
};

class VerbApi {
  constructor() {
    this.url = "https://api.verbugata.com/";
    this.verbPath = `${this.url}verbs`;
  }

  async getVerbs(amount = 1000) {
    const url = `${this.verbPath}?_end=${amount}`;
    return asyncFetch(url);
  }

  async getVerbDetails(verb) {
    const url = `${this.verbPath}?verb=${verb}&_embed=conjugations`;
    return asyncFetch(url);
  }
}

export default VerbApi;
