import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import picture from './2.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to kodeflix</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <img src={picture} className="LGB" alt="logo" />
        </p>
      </div>
    );
  }
}

export default App;
