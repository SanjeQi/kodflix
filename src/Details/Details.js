import React from 'react';
import getShows from '../Gallery/getShows.js';
import './Details.css';

export default class Details extends React.Component {

  constructor() {
    super();
    this.state = { show: {} };
  }

  componentDidMount() {
    this.setState({ 
      show: getShows()
        .find(getShows => getShows.id === this.props.match.params.details) 
    });
  }

  render() {
    return (

      <div className='details'>
        <h1>{this.state.show.title}</h1>
      </div>

    );
  }
}

