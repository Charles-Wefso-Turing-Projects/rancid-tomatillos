import React, { useReducer } from 'react';
import './Movie.css'

const Movie = ({movie, setID, getMovieData, id, loggedIn}) => {
// if user is logged in, render this with user button, else return below
  if(loggedIn) {
    return(
      <section className= "movie" id={id} onClick= {setID} >
        <h2 >{movie.title} </h2>
        <img src={movie.poster_path} 
             alt="poster" 
             className="poster"
        />
        <h3 aria-label="average-rating">Average Rating: { movie.average_rating.toFixed(2)}</h3>
        <button>Test This out</button>
      </section>
    )
  }
  return(
    <section className= "movie" id={id} onClick= {setID} >
      <h2 >{movie.title} </h2>
      <img src={movie.poster_path} 
           alt="poster" 
           className="poster"
      />
      <h3 aria-label="average-rating">Average Rating: { movie.average_rating.toFixed(2)}</h3>
    </section>
  )
}


export default Movie