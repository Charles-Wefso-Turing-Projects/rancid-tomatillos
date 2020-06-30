import React from 'react';
import Movie from '/Users/cwefso/turing/module3/projects/rancid-tomatillos/src/Movie/Movie.js';

const MoviesContainer = ({movies}) => {
  const movieCards = movies.map(movie => (
    <Movie {...movie} key = {movie.id} />
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