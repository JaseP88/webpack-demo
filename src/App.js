import React, { Component } from 'react';

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
      </div>
    );
  }
}

export default App;
