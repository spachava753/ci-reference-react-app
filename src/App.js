import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React CI Reference!</h1>
        </header>
        <p className="App-intro">
          This is a simple React app. The primary purpose of this app is to demonstrate how to setup a CI pipeline with Jenkins!
        </p>
      </div>
    );
  }
}

export default App;
