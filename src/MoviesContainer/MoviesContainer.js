import React from "react";
import Movie from "../Movie/Movie.js";
import "./MoviesContainer.css";
import { Link } from "react-router-dom";
import { deleteFavoriteMovie, postFavoriteMovie } from "../apiCalls";

const MoviesContainer = ({
  movies,
  setID,
  getMovieData,
  loggedIn,
  favoriteMovies,
}) => {
  const addFavoriteMovie = (userID, MovieID) => {
    postFavoriteMovie(userID, MovieID);
  };

  const removeFavoritedMovie = (userID, movieID) => {
    deleteFavoriteMovie(userID, movieID);
  };
  
  const movieCards = movies.map((movie) => {
    let favorited = false;
    if(loggedIn && favoriteMovies) {
      favoriteMovies.forEach((movieFavorite) => {
        if (Number(movieFavorite.movie_id) === movie.id) {
          favorited = true;
        }
      });
    }
    
    return (
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
          favorited={favorited}
          loggedIn={loggedIn}
          rated={movie.rated}
          addFavoriteMovie={addFavoriteMovie}
          removeFavoritedMovie={removeFavoritedMovie}
        />
      </Link>
    );
  });
  return (
    <section aria-label="all-movies" className="allMovies">
      {movieCards}
    </section>
  );
};

export default MoviesContainer;
