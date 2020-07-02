import React, { Component } from 'react';
import LoginButton from '../LoginButton/LoginButton.js'
import MoviesContainer from '../MoviesContainer/MoviesContainer.js'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      movies : []
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
        console.log(this.state.movies)
      },
      (error) => {
        this.setState({
          error
        })
      }
    )
  }

  render(){
    const { error, movies } = this.state;
    if (error) {
      return <section className= "error">Error: {error.message}</section>
    } else {
      return (
        <main className= "App">
          <h1>Rancid Tomatillos</h1>
          <LoginButton />
          <MoviesContainer movies= {movies}/>
        </main>
      )
    }
  }
}


export default App;


// {
//   "user": {
//       "id": 57,
//       "name": "Lucy",
//       "email": "lucy@turing.io"
//   }
// }