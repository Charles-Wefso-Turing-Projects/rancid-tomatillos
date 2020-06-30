import React from 'react';

const Movie = ({movie}) => {
  return(
    <section className= "movie">
      <h3>{movie.title}</h3>
    </section>
  )
}

export default Movie