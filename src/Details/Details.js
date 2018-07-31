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
        .find(single_show => single_show.id === this.props.match.params.showId)
    });
  }

  render() {
    return (
      this.state.show ?
        <div className='details'>

          <div className='left'>
            <div className='h1_title'>
              <h1>{this.state.show.title}</h1>
            </div>
            <h3 className='details-content-synopsis'>
              {this.state.show.synopsis}
            </h3>
          </div>
          <div className='details-content-cover' >
            <img src={this.state.show.image} alt='' />
          </div>
        </div> :
        <Redirect to='/not-found' />
    )
  }
}

