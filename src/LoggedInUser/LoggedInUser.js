import React, { Component } from "react";
import "./LoggedInUser.css";
import MoviesContainer from "../MoviesContainer/MoviesContainer";
import MovieDetailsPage from "../MovieDetailsPage/MovieDetailsPage";
import { getMovie, postUserMovieRating } from "../apiCalls";

class LoggedInUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: null,
      userRatings: []
    };
    this.url = "https://rancid-tomatillos.herokuapp.com/api/v2";
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

  render() {
    if (this.state.selectedMovie !== null) {
      return (
        <section>
          <MovieDetailsPage
            submitUserMovieRating={this.submitUserMovieRating}
            user={this.props.loggedInUserData.user}
            movie={this.state.selectedMovie}
            resetMovie={this.resetMovie}
          />
        </section>
      );
    } else {
      return (
        <main className="LoggedInUserMainPage">
          <h1>Hello {this.props.loggedInUserData.user.name}</h1>
          <button aria-label="logoutButton" onClick={this.props.refreshPage}>
            Logout
          </button>
          <MoviesContainer
            loggedIn={this.props.loggedIn}
            movies={this.props.movies}
            setID={this.setID}
            getMovieData={this.getMovieData}
          />
        </main>
      );
    }
  }
}

export default LoggedInUser;
