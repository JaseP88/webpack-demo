import RandomWordService from './RandomWordService';
import

const randomWordService = new RandomWordService();
export default class MyHelloGuy extends Component {

  hello(name) {
    return 'hello ' + this.randomWordService.randomWord() + '' + name;
  }
}