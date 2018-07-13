import React from 'react';


export default class Details extends React.Component {

  constructor() {
    super();
    this.state = { message: 'Hello, this will be the details page for each Movie & TV show :)' }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ message: 'Coming soon!' });
    }, 1500);
  }

  render() {
    return (

      <div className='details'>
        <h3>{this.state.message}</h3>
      </div>

    );
  }
}

