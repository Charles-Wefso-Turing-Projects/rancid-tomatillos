import React from 'react';
import './MovieDetailsPage.css'

const MovieDetailsPage = ({movie, resetMovie}) => {
    return(
      <section style={{backgroundImage: 'url(' + movie.backdrop_path + ')'}} className= "movie-details-page">
        <h2>{movie.title}</h2>
        <h3>{movie.tagline}</h3>
        <p>Overview: {movie.overview}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Average Rating: {movie.average_rating}</p>
        <p>Genres: {movie.genres.join(", ")}</p>
        <p>Runtime: {movie.runtime} minutes</p>
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