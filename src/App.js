import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import picture from './2.jpg';
import img3 from './img_folder/3.jpg';
import img4 from './img_folder/4.jpg';
import img5 from './img_folder/5.jpg';
import img6 from './img_folder/6.jpeg';
import img7 from './img_folder/7.jpg';
import img8 from './img_folder/8.jpeg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to kodeflix</h1>
        </header>
        <div className="container"> 
          <img src={img3} className= "" alt="Black Mirror"/>
          <img src={img4} className= "" alt="Breaking Bad"/>
          <img src={img5} className= "" alt="Death Note"/>
        </div>

        <div className="container">
          <img src={img6} className= "" alt="Games of Thrones"/>
          <img src={img7} className= "" alt="The Walking Dead"/>
          <img src={img8} className= "" alt="The Wire"/>
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {/* <img src={picture} className="LGB" alt="logo" /> */}
        </p>
      </div>
    );
  }
}

export default App;
