import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Timer extends Component {
  render() {
    const { minInput, secInput } = this.props;
    return (
      <div>
        <span>
          { minInput }
          mins
          { secInput }
          secs
          </span>
      </div>
    )
  }
}

export default Timer;
