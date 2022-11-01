import React, { Component } from 'react'
import './App.css';
import Form from './Components/Form';
import Timer from './Components/Timer';
// 12121
class App extends Component {
  state = {
    minInput: '',
    secInput: '',
  }

componentDidMount() {

}

handleChange = ({ target }) => {
  const { name, value } = target;
  this.setState({
    [name]: value,
  })
}

  render() {
    const { minInput, secInput } = this.state;

    return (
      <div className="App">
      <header>
      <h1>CountDown</h1>
      </header>
      <section className="content">
        <Timer
          minInput={ minInput }
          secInput={ secInput }
        />
        <Form
          minInput={ minInput }
          secInput={ secInput }
          handleChange={ this.handleChange }
        />
      </section>
    </div>
    )
  }
}

export default App
