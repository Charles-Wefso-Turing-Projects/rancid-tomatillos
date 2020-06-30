import React from 'react';

const Movie = ({movie}) => {
  return(
    <section className= "movie">
      <h3>{movie.title}</h3>
      <h3>{movie.average_rating}</h3>
      <h3>{movie.release_date}</h3>
      <img src={movie.backdrop_path} alt="backdrop" className="backdrop"/>
      <img src={movie.poster_path} alt="poster" className="poster"/>
    </section>
  )
}

export default Movie