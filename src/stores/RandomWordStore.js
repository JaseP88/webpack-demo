const { observable, action } = require('mobx');

class RandomWordStore {
  @observable words;

  constructor() {
    this.initialize();
  }

  @action
  initialize() {
    this.words = ['rando1', 'rando2', 'rando3', 'rando4', 'rando5'];
  }

  @action
  addWord(words) {
    this.words.push(...words);
  }
}

export default new RandomWordStore();