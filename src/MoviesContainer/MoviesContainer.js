import React, { Component } from "react";
import Movie from "../Movie/Movie.js";
import "./MoviesContainer.css";
import { Link } from "react-router-dom";

class MoviesContainer extends Component {
  constructor({
    movies,
    setID,
    getMovieData,
    loggedIn,
    userRatings,
  }) {
    super({
      movies,
      setID,
      getMovieData,
      loggedIn,
      userRatings,
    });
  }
  
componentDidMount() {
  console.log('MoviesContainer Logged In true:', this.props.loggedIn);

}

  componentDidUpdate(prevProps) {
    if (this.props.userRatings !== prevProps.userRatings && this.props.userRatings !== null) {
      this.addMovieRatings();
    }
  }

  addMovieRatings = () => {
    return this.props.movies.map((movie) => {
      movie.rated = null
      return this.props.userRatings.ratings.forEach((userRating) => {
        if(movie.id === userRating.movie_id){
         return movie.rated = userRating.rating
        }
      })

    })
  }




  // findRatedMovies = () => {
  //   return this.props.movies.map((movie) => {
  //    movie.userRatings = null 
  //    return this.props.userRatings.ratings.forEach((ratedMovie) => {
  //       if (ratedMovie.movie_id === movie.id) {
  //         console.log(ratedMovie.rating)
  //         movie.userRatings = ratedMovie.rating;
  //       }
  //     });
  //   });
  // };

  render() {
    const movieCards = this.props.movies.map((movie) => (
      <Link
        to={`/${movie.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Movie
          movie={movie}
          id={movie.id}
          key={movie.id}
          setID={this.props.setID}
          getMovieData={this.props.getMovieData}
          selectedMovie={this.props.selectedMovie}
          loggedIn={this.props.loggedIn}
        />
      </Link>
    ));
    // method for iteration

    return (
      <section aria-label="all movies" className="allMovies">
        {movieCards}
      </section>
    );
  }
}

export default MoviesContainer;
