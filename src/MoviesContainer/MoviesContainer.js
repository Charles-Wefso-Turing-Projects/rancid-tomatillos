import React from "react";
import Movie from "../Movie/Movie.js";
import "./MoviesContainer.css";
import { Link } from "react-router-dom";
import { deleteFavoriteMovie,
  postFavoriteMovie } from "../apiCalls"

const MoviesContainer = ({
  movies,
  setID,
  getMovieData,
  loggedIn,
  favoriteMovies
}) => {

  addFavoriteMovie = (userID, MovieID) => {
    postFavoriteMovie(userID, MovieID)
  }

  removeFavoritedMovie = (userID, movieID) => {
    deleteFavoriteMovie(userID, movieID);
  };


  const movieCards = movies.map((movie) => (
    <Link
    to={`/${movie.id}`}
    aria-label="movie"
    key={movie.id}
    style={{ textDecoration: "none", color: "black" }}
    >
        <Movie
          movie={movie}
          id={movie.id}
          key={movie.id}
          setID={setID}
          getMovieData={getMovieData}
          favorited={this.props.favoriteMovies.includes(movie.id)}
          loggedIn={loggedIn}
          rated={movie.rated}
          addFavoriteMovie = {this.addFavoriteMovie}
          removeFavoritedMovie= {this.removeFavoritedMovie}
          />
      </Link>
    ));
    
    return (
      <section aria-label="all-movies" className="allMovies">
        {movieCards}
      </section>
    );
  }

export default MoviesContainer;
