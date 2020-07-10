import React from "react";
import Movie from "../Movie/Movie.js";
import "./MoviesContainer.css";
import { Link } from "react-router-dom";

const MoviesContainer = ({
  movies,
  setID,
  selectedMovie,
  getMovieData,
  loggedIn,
}) => {
  
  const movieCards = movies.map((movie) => (
    <Link to= {`/${movie.id}`} style={{ textDecoration: 'none', color: 'black' }}>
      <Movie
        movie={movie}
        id={movie.id}
        key={movie.id}
        setID={setID}
        getMovieData={getMovieData}
        selectedMovie={selectedMovie}
        loggedIn={loggedIn}
        />
    </Link>
  ));
  // method for iteration

  return (
    <section aria-label="all-movies" className="allMovies">
      {movieCards}
    </section>
  );
};

export default MoviesContainer;
