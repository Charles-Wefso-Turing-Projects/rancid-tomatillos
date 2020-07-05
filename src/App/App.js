import React, { Component } from "react";
// import PropTypes from 'prop-types';
import MoviesContainer from "../MoviesContainer/MoviesContainer.js";
import LoginForm from "../LoginForm/LoginForm.js";
import LoggedInUser from "../LoggedInUser/LoggedInUser";
import Nav from "../Nav/Nav.js";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      movies: [],
      loginFormTriggered: false,
      loggedIn: false,
      loggedInUserData: {},
      selectedMovie: {},
    };
    this.url = "https://rancid-tomatillos.herokuapp.com/api/v2";
  }

  componentDidMount() {
    fetch(`${this.url}/movies`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            movies: result.movies,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        }
      );
  }

  getUserData = (loginEmail, loginPassword) => {
    fetch(`${this.url}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loginEmail, password: loginPassword }),
    })
      .then((response) => {
        if (!response.ok) {
          console.log(response.statusText);
          throw response.statusText;
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          loginFormTriggered: false,
          loggedIn: true,
          loggedInUserData: { data },
        });
      })
      .catch((error) => {
        console.log(error);
        alert(`yo, this is wrong:  ${error}`);
      });
  };
  // console.log(result)
  // console.log(loginEmail, loginPassword)
  // console.log(typeof loginEmail, typeof loginPassword)
  // this.setState({ movies: result.movies });

  triggerForm = () => {
    this.setState({
      loginFormTriggered: true,
    });
  };

  refreshPage = () => {
    window.location.reload(false);
  };

 

  render() {
    const {
      error,
      movies,
      loginFormTriggered,
      loggedIn,
      loggedInUserData,
    } = this.state;
    if (error) {
      return (
        <section className="error">
          The page did not load because: {error.message}
        </section>
      );
    }
    if (loginFormTriggered) {
      return (
        <LoginForm
          getUserData={this.getUserData}
          refreshPage={this.refreshPage}
        />
      );
    }
    if (loggedIn) {
      return (
        <LoggedInUser
          loggedIn={loggedIn}
          loggedInUserData={loggedInUserData}
          movies={movies}
          refreshPage={this.refreshPage}
          showMovieDetailsPage={this.showMovieDetailsPage}
        />
      );
    } else {
      return (
        <main className="App">
          <Nav triggerForm={this.triggerForm} />
          <MoviesContainer movies={movies} />
        </main>
      );
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
