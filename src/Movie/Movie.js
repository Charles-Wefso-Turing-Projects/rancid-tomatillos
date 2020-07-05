import React from 'react';
import './Movie.css'

const Movie = ({movie, showMovieDetailsPage, id}) => {
  return(
    <section className= "movie" id={id} onClick= {showMovieDetailsPage} >
      <h2 >{movie.title} </h2>
      <img src={movie.poster_path} 
           alt="poster" 
           className="poster"
      />
      <h3 aria-label="average-rating"></h3>
      {/* <h3>{movie.release_date}</h3> */}
      {/* <img src={movie.backdrop_path} alt="backdrop" className="backdrop"/> */}
      
    </section>
  )
}

export default Movie