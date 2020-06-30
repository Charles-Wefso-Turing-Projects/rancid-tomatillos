import React from 'react';
import Movie from '/Users/cwefso/turing/module3/projects/rancid-tomatillos/src/Movie/Movie.js';

const MoviesContainer = () => {
// method for iteration

  return(
    <section className= "allMovies">
      <Movie />
      {/* varibale for all the iterated movies */}
    </section>
  )
}

export default MoviesContainer;