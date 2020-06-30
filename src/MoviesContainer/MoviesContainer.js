import React from 'react';
import Movie from '../Movie/Movie.js';
import './MoviesContainer.css'

const MoviesContainer = ({movies}) => {
  const movieCards = movies.map(movie => (
    <Movie movie= {movie} key = {movie.id} />
  ))
// method for iteration

  return(
    <section className= "allMovies">
      { movieCards }
      {/* varibale for all the iterated movies */}
    </section>
  )
}

export default MoviesContainer;