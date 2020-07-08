import React, { Component } from "react";
// import PropTypes from 'prop-types';
import MoviesContainer from "../MoviesContainer/MoviesContainer.js";
import LoginForm from "../LoginForm/LoginForm.js";
import LoggedInUser from "../LoggedInUser/LoggedInUser"
import { callUserData, getAllMovies } from "../apiCalls"
import { Switch, Route, NavLink } from 'react-router-dom'

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      movies: [],
      loggedIn: false,
      loggedInUserData: {},
      selectedMovie: {},
    };
  }

  componentDidMount() {
    getAllMovies().then(
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
    callUserData(loginEmail, loginPassword)
    .then((data) => {
      const {user} = data
      this.setState({
        loginFormTriggered: false,
        loggedIn: true,
        loggedInUserData: { user }
      });
    });
  }  

  refreshPage = () => {
    window.location.reload(false);
  };

  render() {

    const { error, movies, loggedIn, loggedInUserData } = this.state;
    // conditionally redirect to error
    if (error) {
      return (
        <section className="error">
          The page did not load because: {error.message}
        </section>
      );
    }
    // make this a <Link> to LoginForm
      // if (loginFormTriggered) {
      //   return (
      //     <LoginForm

      //     />
      //   );
      // }

    // conditionally redirect to LoggedInUser
    if (loggedIn) {
      return <LoggedInUser 
                loggedInUserData={ loggedInUserData } 
                movies={movies} 
                refreshPage = { this.refreshPage } 
            />;
    }
    
    return (
        <main className="App">
            <Route exact path="/" render= {(routeProps) => 
              <main>
                <nav>
                  <h2>Rancid Tomatillos</h2>
                  <NavLink to="/login" className= "nav-bar">
                    <h3>Login</h3>
                  </NavLink>
                </nav>
                <MoviesContainer {...routeProps} movies={movies} />
              </main>
            }/>
            <Route exact path="/login" render= {(routeProps) => 
              <LoginForm {...routeProps} getUserData={this.getUserData}/>}
            />
        </main>
      );

      
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
