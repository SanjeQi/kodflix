import React, { Component } from 'react';
import './App.css';
// import picture from './2.jpg';
import img3 from './img_folder/3.jpg';
import img4 from './img_folder/4.jpg';
import img5 from './img_folder/5.jpg';
import img6 from './img_folder/6.jpg';
import img7 from './img_folder/7.jpg';
import img8 from './img_folder/8.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to Cristian KODFLIX</h1>
        </header>
        <div className="container"> 
          <div className="item"><img src={img3} className= "image" alt="Black Mirror"/></div>
          <div className="item"><img src={img4} className= "image" alt="Breaking Bad"/></div>
          <div className="item"><img src={img5} className= "image" alt="Death Note"/></div>
        </div>

        <div className="container">
        <div className="item"><img src={img6} className= "image" alt="Games of Thrones"/></div>
        <div className="item"><img src={img7} className= "image" alt="The Walking Dead"/></div>
        <div className="item"><img src={img8} className= "image" alt="The Wire"/></div>
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
