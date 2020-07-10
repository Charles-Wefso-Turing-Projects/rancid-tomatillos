import React, { Component } from "react";
// import PropTypes from 'prop-types';
import MoviesContainer from "../MoviesContainer/MoviesContainer.js";
import LoginForm from "../LoginForm/LoginForm.js";
import LoggedInUser from "../LoggedInUser/LoggedInUser";
import MovieDetailsPage from "../MovieDetailsPage/MovieDetailsPage";
import { getMovie, getUsersRatings, postUserMovieRating, callUserData, getAllMovies } from "../apiCalls";
import { Switch, Route, NavLink, Redirect, withRouter } from "react-router-dom";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      movies: [],
      loggedIn: false,
      loggedInUserData: {},
      selectedMovie: null,
      userRatings: []
    };
    this.url = "https://rancid-tomatillos.herokuapp.com/api/v2";
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

  //logged in methods

  //not currently being called. Will need to call on successful login
  loadUserRatings = () => {
    getUsersRatings(this.state.userID)
      .then(
        (result) => {
          this.setState({
            userRatings: result,
          });
        })
      .catch((error) => {
        console.log(error);
        alert(`yo, this is wrong:  ${error}`);
      })
  }

  setID = (e) => {
    const { id } = e.target.closest(".movie");
    this.getMovieData(id);
  };

  resetMovie = () => {
    this.setState({
      selectedMovie: null,
    });
  };

  getMovieData = (id) => {
    getMovie(id)
      .then((data) => {
        this.setState({
          selectedMovie: data.movie,
        });
      })
      .catch((error) => {
        console.log(error);
        alert(`yo, this is wrong:  ${error}`);
      });
  };

  submitUserMovieRating = (id, userRating, movieId) => {
    postUserMovieRating(id, userRating, movieId)
    .then((data) => this.setState({
      userRatings : this.state.userRatings.push(data)
    }))
    .catch((error) => {
      console.log(error);
      alert(`yo, this is wrong:  ${error}`);
    })
  }

  // is setting to false but not rerendering the page
  logOutUser = () => {
    this.setState({
      loggedIn: false
    })
  }

  //main page methods

  getUserData = (loginEmail, loginPassword) => {
    callUserData(loginEmail, loginPassword).then((data) => {
      const { user } = data;
      this.setState({
        loginFormTriggered: false,
        loggedIn: true,
        loggedInUserData: { user },
      });
    this.props.history.push("/")
    });
  };

  render() {
    const { error, movies, loggedIn, setID, getMovieData, loggedInUserData } = this.state;
    // conditionally redirect to error
    if (error) {
      return (
        <section className="error">
          The page did not load because: {error.message}
        </section>
      );
    }
    // conditionally redirect to LoggedInUser
    if (!loggedIn) {
      return (
        <main aria-label="App" className="App">
              <Route exact path="/" render= {(routeProps) => 
                <main>
                  <nav>
                    <h2>Rancid Tomatillos</h2>
                    <NavLink to="/login" className= "nav-bar">
                      <h3>Login</h3>
                    </NavLink>
                  </nav>
                  <MoviesContainer {...routeProps} movies={movies} />
                {/* Maybe add a prop to MoviesContainer for loggedIn, 
                if it's false render it without the links around 
                the movies?*/}
                </main>
              }/>
              <Route exact path="/login" render= {(routeProps) => 
                <LoginForm {...routeProps} getUserData={this.getUserData}/>}
              />
              
          </main>
        );
    }
        
    // if (this.state.selectedMovie !== null) {
    //   return (
    //     <section>
    //       <MovieDetailsPage
    //             submitUserMovieRating={this.submitUserMovieRating}
    //             user={loggedInUserData.user}
    //             movie={this.state.selectedMovie}
    //             resetMovie={this.resetMovie}
    //             userRatings={this.userRatings}
    //       />
    //     </section>
    //   );
    // } 
          
      return (
        <main aria-label="App" className="App">
          <Route exact path="/" render= {(routeProps) => 
            <main>
              <nav>
                <h2>Rancid Tomatillos</h2>
                <h1>Hello {this.state.loggedInUserData.user.name}</h1>
                  <button aria-label="logoutButton" onClick={this.logOutUser}>
                    Logout
                  </button>
              </nav>
              <MoviesContainer {...routeProps} movies={movies} setID={setID} getMovieData={getMovieData}/>
            </main>
          }/>
          <Route exact path="/login" render= {(routeProps) => 
            <LoginForm {...routeProps} getUserData={this.getUserData}/>}
          />

          <Route 
            exact path="/:id" 
            render={(routeProps) => {
              const { params } = routeProps.match
              const { id } = params
              const selectedMovie = movies.find(movie => movie.id === parseInt(id)) 
              return <MovieDetailsPage {...routeProps} 
                        movie={selectedMovie} 
                        user={loggedInUserData.user} 
                        submitUserMovieRating= {this.submitUserMovieRating}
                        
                        />}
            } 
          />
        </main>
      );      
    }
  }
  
  export default withRouter(App);

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
