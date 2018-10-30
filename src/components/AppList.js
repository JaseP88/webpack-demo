import React, { Component } from 'react';
import RandomWordService from '../services/RandomWordService';
import { observer } from 'mobx-react';

@observer
class AppList extends Component {

  constructor(props) {
    super(props);
    this.randomWordService = RandomWordService;
    this.getRandomWord = this.getRandomWord.bind(this);
    this.state = {x: 0};
  }

  getRandomWord() {
    let randomWord;

    if (this.state.x === 0) {
      randomWord = RandomWordService.randomWord('0');
    } else {
    randomWord = RandomWordService.randomWord('1');
    }
    return randomWord;
    // return 'meep';
  }

  render() {
        return (
            <div>
                <ul>
                    <li className="List-first" >First Item</li>
                    <li className="List-second" >Second Item</li>
                    <li className="List-third" >Third Item</li>
                    <li className="List-fourth" >{this.getRandomWord()}</li>
                </ul>
            </div>
        );
    }
}

export default AppList;