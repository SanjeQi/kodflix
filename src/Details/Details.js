import React from 'react';
import getShows from '../Gallery/getShows.js';
import './Details.css';
import { Redirect } from 'react-router-dom';

export default class Details extends React.Component {

  constructor() {
    super();
    this.state = { show: {} };
  }

  componentDidMount() {

    
    this.setState({
      show: getShows()
        .find(single_show => single_show.id === this.props.match.params.details)
    });
  }

  render() {
    return (
      this.state.show ?
        <div className='details'>
          <h1>{this.state.show.title}</h1>
        </div>:
        <Redirect to='/not-found' />
    )
  }
}

