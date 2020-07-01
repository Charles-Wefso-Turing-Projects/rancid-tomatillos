import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginButton from '../LoginButton/LoginButton.js'
import MoviesContainer from '../MoviesContainer/MoviesContainer.js'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      movies : [],
      button : false
    }
    this.url = "https://rancid-tomatillos.herokuapp.com/api/v2"
  }

  componentDidMount() {
    fetch(`${this.url}/movies`)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          movies : result.movies
        })
      },
      (error) => {
        this.setState({
          error
        })
      }
    )
  }

  triggerForm = () => {
    this.setState({
      button : true
    })
  }

  refreshPage = () => {
    window.location.reload(false)
  }

  render(){
    const { error, movies, button } = this.state;
    if (error) {
      return <section className= "error">Error: {error.message}</section>
    } else if (button === true) {
      return (
        <main className= "App">
        <h1>Login Page</h1>
        <button onClick= {this.refreshPage}>X</button>
        </main>
      )
    } else {
      return (
        <main className= "App">
          <h1>Rancid Tomatillos</h1>
          <LoginButton triggerForm= {this.triggerForm}/>
          <MoviesContainer movies= {movies}/>
        </main>
      )
    }
  }
}


export default App;

App.propTypes = {
  movies : PropTypes.array,
  button : PropTypes.bool,
  error : PropTypes.oneOf([null].isRequired)
}
// {
//   "user": {
//       "id": 57,
//       "name": "Lucy",
//       "email": "lucy@turing.io"
//   }
// }