import React, { Component } from "react";
import Movie from "../Movie/Movie.js";
import "./MoviesContainer.css";
import { Link } from "react-router-dom";

class MoviesContainer extends Component {
  constructor({
    movies,
    setID,
    getMovieData,
    loggedIn,
    userRatings,
  }) {
    super({
      movies,
      setID,
      getMovieData,
      loggedIn,
      userRatings,
    });
  }

  render() {
    const movieCards = this.props.movies.map((movie) => (
      <Link
        to={`/${movie.id}`}
        key={movie.id}
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
          rated={movie.rated}
        />
      </Link>
    ));

    return (
      <section aria-label="all movies" className="allMovies">
        {movieCards}
      </section>
    );
  }
}

export default MoviesContainer;
