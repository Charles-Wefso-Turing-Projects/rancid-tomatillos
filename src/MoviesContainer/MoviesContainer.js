import React from 'react';
import Movie from '../Movie/Movie.js';
import './MoviesContainer.css'

const MoviesContainer = ({movies}) => {
  const movieCards = movies.map(movie => (
    <Movie movie= {movie} key = {movie.id} />
  ))
// method for iteration

  return(
    <section aria-label= "all-movies" className= "allMovies">
      { movieCards }
    </section>
  )
}

export default MoviesContainer;