import React from 'react';
import './Movie.css'

const Movie = ({movie, setID, id, loggedIn, key}) => {

  
    // if user is not logged in
  if(!loggedIn) {
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

  //  if(userRatings){
  //     console.log('Hit');      
  //     return(
  //       <section className= "movie" id={id}>
  //       <h2 >{movie.title} </h2>
  //       <img src={movie.poster_path} 
  //         alt="poster" 
  //         className="poster"
  //         />
  //       <h3 aria-label="average-rating">Average Rating: { movie.average_rating.toFixed(2)}</h3>
  //     </section>
  //       )
  //   }
    // otherwise, display that it hasn't been rated
    return(
      <section className= "movie" id={id}>
      <h2 >{movie.title} </h2>
      <img src={movie.poster_path} 
        alt="poster" 
        className="poster"
        />
      <h3 aria-label="average-rating">Average Rating: { movie.average_rating.toFixed(2)}</h3>
      <h3 aria-label="user-rating">Not Yet Rated</h3>
    </section>
    )
}

export default Movie


// if user is logged in, render this with user button, else return below



