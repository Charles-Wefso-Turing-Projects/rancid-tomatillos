import React from 'react';
import './MovieDetailsPage.css'

const MovieDetailsPage = ({movie, resetMovie}) => {
  // const divStyle = {
  //   color: "white",
  //   backgroundImage: 'url(' + movie.backdrop_path + ')',
  //   height: 200px
  // };
  
    return(
      <section style={{backgroundImage: 'url(' + movie.backdrop_path + ')'}} className= "movie-details-page">
        <p>Title: {movie.title}</p>
        {/* <img src={movie.backdrop_path} alt="backdrop" className="backdrop"/> */}
        <p>Overview: {movie.overview}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Average Rating: {movie.average_rating}</p>
        <p>Genre: {movie.genres.name}</p>
        <p>Runtime{movie.runtime} minutes</p>
        <button onClick= {resetMovie}>Home</button>
      </section>  
    )
}

// // {"movie": {id: 1, 
// title: "Movie Title", 
// poster_path: "someURL", 
// backdrop_path: "someURL", 
// release_date: "2019-12-04", 
// overview: "Some overview", 
// average_rating: 6, 
// genres: [{id: 18, name:"Drama"}], 
// budget:63000000, 
// revenue:100853753, 
// runtime:139, 
// tagline: "Movie Tagline" }}

export default MovieDetailsPage