import React, { Component } from 'react';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="loader-style">
        <div className="loader"></div>
      </div>
    );
  }
}

export default Loader;
