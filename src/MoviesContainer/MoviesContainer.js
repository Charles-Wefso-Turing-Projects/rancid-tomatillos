import React from 'react';
import Movie from '../Movie/Movie.js';
import './MoviesContainer.css'

const MoviesContainer = ({movies, showMovieDetailsPage}) => {
  const movieCards = movies.map(movie => (
    <Movie movie= {movie} id = {movie.id} key = {movie.id} showMovieDetailsPage= {showMovieDetailsPage}/>
  ))
// method for iteration

  return(
    <section aria-label= "all-movies" className= "allMovies">
      { movieCards }
    </section>
  )
}

export default MoviesContainer;