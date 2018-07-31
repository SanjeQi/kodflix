import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from './Details/Details';
import Gallery from './Gallery/Gallery';
import NotFound from './NotFound/NotFound.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Gallery} />
            <Route path='/not-found' component={NotFound} />
            <Route path='/:showId' component={Details} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
