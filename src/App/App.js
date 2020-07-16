import React, { Component } from "react";
import MoviesContainer from "../MoviesContainer/MoviesContainer.js";
import LoginForm from "../LoginForm/LoginForm.js";
import MovieDetailsPage from "../MovieDetailsPage/MovieDetailsPage";
import {
  getUsersRatings,
  callUserData,
  getAllMovies,
  deleteUsersRating
} from "../apiCalls";
import { Route, NavLink, withRouter } from "react-router-dom";

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
      userRatings: null,
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

  componentDidUpdate() {
      if (this.state.loggedIn === true) {
            this.loadUserRatings()
        }
  }

  deleteRating = (userID, movieID) => {
    deleteUsersRating(userID, movieID)
  }

  addMovieRatings = (userRatings) => {
    return this.state.movies.map((movie) => {
      movie.rated = null
      movie.rating_id = null
      movie.user_id = null
      userRatings.ratings.forEach((userRating) => {
        if(movie.id === userRating.movie_id){
          movie.rated = userRating.rating
          movie.rating_id =  userRating.id
          movie.user_id = userRating.user_id
        }
      })
      return movie
    })
  }

  loadUserRatings = () => {
    // if(!this.state.userRatings) {
      getUsersRatings(this.state.loggedInUserData.user.id)
        .then((result) => { 
            const userRatedMovies = this.addMovieRatings(result)
            this.setState({
              userRatings : result,
              movies : userRatedMovies
            })
        })
        .catch((error) => {
          console.log(error);
          alert(`yo, this is wrong:  ${error}`);
        });
    // }
  };

  setID = (e) => {
    const { id } = e.target.closest(".movie");
    this.getMovieData(id);
  };


  logOutUser = () => {
    this.setState({
      loggedIn: false,
    });
  };

  getUserData = (loginEmail, loginPassword) => {
    callUserData(loginEmail, loginPassword)
      .then((data) => {
        const { user } = data;
        this.setState({
          loggedIn: true,
          loggedInUserData: { user },
        });
      })
      .then(this.props.history.push("/"))
      .catch((error) => {
        alert('Incorrect email or password.')
        this.props.history.push("/login")
      });
  };

  render() {
    const {
      userRatings,
      error,
      movies,
      loggedIn,
      setID,
      loggedInUserData,
    } = this.state;

    if (error) {
      return (
        <section className="error">
          The page did not load because: {error.message}
        </section>
      );
    }

    if (!loggedIn) {
      return (
        <main aria-label="App" className="App">
          <Route
            exact
            path="/"
            render={(routeProps) => (
              <main>
                <nav className="navBar">
                  <h2>Rancid Tomatillos</h2>
                  <NavLink to="/login" className="nav-bar">
                    <h3>Login</h3>
                  </NavLink>
                </nav>
                <MoviesContainer
                  {...routeProps}
                  movies={movies}
                  loggedIn={loggedIn}
                />
              </main>
            )}
          />
          <Route
            exact
            path="/login"
            render={(routeProps) => (
              <LoginForm
                {...routeProps}
                loggedInUserData={this.loggedInUserData}
                getUserData={this.getUserData}
              />
            )}
          />
        </main>
      );
    }

    return (
      <main aria-label="App" className="App">
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <main>
              <nav className="navBar">
                <h2>Rancid Tomatillos</h2>
                <h1>Hello {this.state.loggedInUserData.user.name}</h1>
                <button aria-label="logoutButton" onClick={this.logOutUser}>
                  Logout
                </button>
              </nav>
              <MoviesContainer
                {...routeProps}
                movies={movies}
                setID={setID}
                getMovieData={this.getMovieData}
                loggedIn={loggedIn}
                userRatings={userRatings}
              />
            </main>
          )}
        />
        <Route
          exact
          path="/login"
          render={(routeProps) => (
            <LoginForm {...routeProps} getUserData={this.getUserData} />
          )}
        />

        <Route
          exact
          path="/:id"
          render={(routeProps) => {
            const { params } = routeProps.match;
            const { id } = params;
            const selectedMovie = movies.find(
              (movie) => movie.id === parseInt(id)
            );
            return (
              <MovieDetailsPage
                {...routeProps}
                movie={selectedMovie}
                user={loggedInUserData.user}
                submitUserMovieRating={this.submitUserMovieRating}
                getMovieData={this.getMovieData}
                userRating={this.state.userRatings}
                deleteRating={this.deleteRating}
              />
            );
          }}
        />
      </main>
    );
  }
}

export default withRouter(App);
