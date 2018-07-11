import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Details from './Details/Details.js';
import Gallery from './Gallery/Gallery.js';

class App extends Component {
  render() {
    return (

      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Gallery} />
            <Route path='/:details' component={Details} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
