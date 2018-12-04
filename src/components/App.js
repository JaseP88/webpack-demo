import React, { Component } from 'react';
import AppList from './AppList';
import AsynchronousService from '../services/AsynchronousService';


class App extends Component {
  constructor(props) {
    super(props);
    this.asyncService = AsynchronousService;
    this.state = {
      name: 'old',
      number: this.doThisToMe()
    };
    this.handleMe = this.handleMe.bind(this);
  }

  componentDidMount() {
    console.log('');
  }

  async doThisToMe() {
    return await this.asyncService.giveYouLater().then((res) => {
      return res;
    }, (err) => {
      // in here
    })
  }
  // async componentWillMount() {
  //   await this.asyncService.giveYouLater().then((res) => {
  //     this.setState({ number: res })
  //   }, (err) => {
  //     // this.setState({ number: -1 })
  //     throw err
  //   }).catch((err) => {
  //     console.log(err);
  //     this.setState({ number: -1 })
  //   })

    // await this.asyncService.giveYouLater()
    // .catch(err => {
    //   this.setState({ number: -1 })
    // }).then((res) => {
    //   this.setState({ number: res })
    // });
  // }

  handleMe() {
    this.setState({name: 'new'});
  };

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>
        <h1>Hello friends</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="App-button" onClick={this.handleMe}>click me</button>
        <button className="App-disabled-button" disabled={true}>disabled</button>
        <AppList />
      </div>
    );
  }
}

export default App;
