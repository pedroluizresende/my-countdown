import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { minInput, secInput, handleChange } = this.props;
    return (
      <form className="form form-control" >
        <div className="inputs">
          <label htmlFor="min-input">
            <input
              type="number"
              id="min-input"
              className="form-control"
              placeholder="mins"
              name="minInput"
              value={ minInput }
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="sec-input">
            <input
              type="number"
              id="sec-input"
              className="form-control"
              placeholder="secs"
              name="secInput"
              value={ secInput }
              onChange={ handleChange }
            />
            </label>
          </div>
          <div className="btns">
            <button type="Button" className="btn btn-outline-success">Começar</button>
            <button type="Button" className="btn btn-outline-danger">Parar</button>
          </div> 
       </form>
    )
  }
}

Form.propTypes = {
  minInput: PropTypes.string.isRequired,
  secInput: PropTypes.string.isRequired,
}

export default Form