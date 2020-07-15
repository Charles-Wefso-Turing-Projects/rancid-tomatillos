import React from "react";
import Movie from "../Movie/Movie.js";
import "./MoviesContainer.css";
import { Link } from "react-router-dom";

const MoviesContainer = ({
  movies,
  setID,
  getMovieData,
  loggedIn,
  selectedMovie
}) => {

  const loggedOutMovieCards = movies.map((movie) => (
        <Movie
          movie={movie}
          id={movie.id}
          key={movie.id}
          setID={setID}
          getMovieData={getMovieData}
          selectedMovie={selectedMovie}
          loggedIn={loggedIn}
          rated={movie.rated}
        />
    ));
  

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
          selectedMovie={selectedMovie}
          loggedIn={loggedIn}
          rated={movie.rated}
          />
      </Link>
    ));
    
    if(!loggedIn) {
      return (
        <section aria-label="all-movies" className="allMovies">
         {loggedOutMovieCards}
        </section>
      )
    }

    return (
      <section aria-label="all-movies" className="allMovies">
        {movieCards}
      </section>
    );
  }

export default MoviesContainer;
