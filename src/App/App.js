import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import LoginButton from '../LoginButton/LoginButton.js'
import MoviesContainer from '../MoviesContainer/MoviesContainer.js'
import LoginForm from '../LoginForm/LoginForm.js'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      movies : [],
      button : false,
      loggedIn : false
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

  getUserData = (loginEmail, loginPassword) => {
    fetch(`${this.url}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email: loginEmail, password: loginPassword})
    })
    .then(res => res.json())
    .then(data => {
      console.log('Success:', data);
    })
    .then(() => {
      this.setState({
        button: false,
        loggedIn : true
      })
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
    // console.log(result)
    // console.log(loginEmail, loginPassword)
    // console.log(typeof loginEmail, typeof loginPassword)
    // this.setState({ movies: result.movies });


  triggerForm = () => {
    this.setState({
      button : true
    })
  }

  refreshPage = () => {
    window.location.reload(false)
  }

  render(){
    const { error, movies, button, loggedIn } = this.state;
    if (error) {
      return <section className= "error">The page did not load because: {error.message}</section>
    }
    if (button === true) {
      return (
        <main className= "Login">
          <h1>Login Page</h1>
          <LoginForm getUserData= {this.getUserData}/>
          {/* <button onClick= {this.refreshPage}>X</button> */}
        </main>
      )
    }
    if (loggedIn === true) {
      return (
          <h1>Hey there user</h1>
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

// App.propTypes = {
//   movies : PropTypes.array,
//   button : PropTypes.bool,
//   error : PropTypes.oneOf([null].isRequired)
// }


// {
//   "user": {
//       "id": 57,
//       "name": "Lucy",
//       "email": "lucy@turing.io"
//   }
// }