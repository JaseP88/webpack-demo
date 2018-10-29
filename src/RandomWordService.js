import RandomWordStore from './RandomWordStore';

class RandomWordService {
  constructor() {
    this.randomStore = RandomWordStore;
  }

  randomWord() {
    return this.randomStore.words[Math.floor(Math.random() * Math.floor(5))];
  }
}

export default new RandomWordService();