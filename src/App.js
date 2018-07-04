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
          <div className="item">
            <img src={img3} className="image" alt="Black Mirror" />
            <div className="movieTitle"><h1>Black Mirror</h1></div>
          </div>

          <div className="item">
            <img src={img4} className="image" alt="Breaking Bad" />
            <div className="movieTitle"><h1>Breaking Bad</h1></div>
          </div>

          <div className="item">
            <img src={img5} className="image" alt="Death Note" />
            <div className="movieTitle"><h1>Death Note</h1></div>
          </div>
        </div>

        <div className="container">
          <div className="item">
            <img src={img6} className="image" alt="Games of Thrones" />
            <div className="movieTitle"><h1>Games of Thrones</h1></div>
          </div>

          <div className="item">
            <img src={img7} className="image" alt="The Walking Dead" />
            <div className="movieTitle"><h1>The Walking Dead</h1></div>
          </div>

          <div className="item">
            <img src={img8} className="image" alt="The Wire" />
            <div className="movieTitle"><h1>The Wire</h1></div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
