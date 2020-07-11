import React, { Component } from "react";
import Movie from "../Movie/Movie.js";
import "./MoviesContainer.css";
import { Link } from "react-router-dom";

class MoviesContainer extends Component {
  constructor({
    movies,
    setID,
    selectedMovie,
    getMovieData,
    loggedIn,
    userRatings,
  }) {
    super({
      movies,
      setID,
      selectedMovie,
      getMovieData,
      loggedIn,
      userRatings,
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.userRatings !== prevProps.userRatings && this.props.userRatings !== null) {
      this.findRatedMovies();
    }
  }

  findRatedMovies = () => {
    return this.props.movies.map((movie) => {
      this.props.userRatings.ratings.map((ratedMovie) => {
        if (ratedMovie.movie_id === movie.id) {
          return (movie.userRatings = ratedMovie.rating);
        }
      });
    });
  };

  render() {
    const movieCards = this.props.movies.map((movie) => (
      <Link
        to={`/${movie.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Movie
          movie={movie}
          id={movie.id}
          key={movie.id}
          setID={this.props.setID}
          getMovieData={this.props.getMovieData}
          selectedMovie={this.props.selectedMovie}
          loggedIn={this.props.loggedIn}
          userRatings={this.props.userRatings}
        />
      </Link>
    ));
    // method for iteration

    return (
      <section aria-label="all-this.propsmovies" className="allMovies">
        {movieCards}
      </section>
    );
  }
}

export default MoviesContainer;
