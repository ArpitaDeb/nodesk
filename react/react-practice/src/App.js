import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        clicks: 0,
      };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <button className="Button" onClick={() => this.setState({clicks: this.state.clicks+1})}>{this.state.clicks}</button>


      </div>
      
    );
  }
}

export default App;
