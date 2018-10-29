import React, { Component } from 'react';
import AppList from './AppList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'old'
    };
    this.handleMe = this.handleMe.bind(this);
  }

  handleMe() {
    this.setState({name: 'new'});
  };

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>
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
