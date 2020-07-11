import React, { Component } from "react";
import "./MovieDetailsPage.css";
import { getMovie, postUserMovieRating } from "../apiCalls";

class MovieDetailsPage extends Component {
  constructor(movie, isRated, user, submitUserMovieRating, userRatings, getMovieData, selectedMovie) {
    super(movie, isRated, user, submitUserMovieRating, userRatings, getMovieData, selectedMovie)
    this.state = {
      selectedValue: '',
      selectedMovie: null,
      ratings: false
    }
  }
    
    // this.userId = user.id

  componentDidMount() {
   getMovie(this.props.movie.id)
    .then((data) => {
      this.setState({
        selectedMovie: data.movie,
        selectedValue: null,
      });
    })
    .catch((error) => {
      console.log(error);
      alert(`yo, this is wrong:  ${error}`);
    });
  };

  componentDidMount(prevProps) {
    if (this.props.userRatings !== prevProps.ratings) {
      this.setState({
        ratings: true
      })
    }
  }
    

  handleChange = (e) => {;
    const { value } = e.target;
    this.setState({ selectedValue: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    postUserMovieRating(this.props.user.id, this.state.selectedValue, this.props.movie.id)
    .then((data) => this.setState({
      userRatings : this.props.userRatings.push(data)
    }))
    .catch((error) => {
      console.log(error);
      alert(`yo, this is wrong:  ${error}`);
    })
    // display rating
  };
  // if(isRated) {

  // } else {

  render() {

    if(this.state.selectedMovie === null) {
      return (
        <section>
          <h1>Loading...</h1>
        </section>
      )
    }

    // if(this.state.selectedMovie) {
    //   console.log(this.state.selectedMovie)

      return (
        <section
        style={{ backgroundImage: `url(${this.props.movie.backdrop_path})` }}
        className="movie-details-page"
        aria-label="image-of-movie"
        >
        <h2>{this.props.movie.title}</h2>
        <h3>{this.state.selectedMovie.tagline}</h3>
        <p>{this.state.selectedMovie.overview}</p>
        <p>Release Date: {this.props.movie.release_date}</p>
        <p>Average Rating: {this.props.movie.average_rating}</p>
        <p>Genres: {this.state.selectedMovie.genres.join(", ")}</p>
        <p>Runtime: {this.state.selectedMovie.runtime} minutes</p>
        {/* <p>Budget: {this.state.selectedMovie.budget} dollars</p>
        <p>Revenue: {this.state.selectedMovie.revenue} dollars</p> */}
        {/* Link to main page */}
        {/* if not rated: */}
        <form>
          <select name="rateMovie" onChange={this.handleChange}>
            <option value="">--Please choose an rating--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <input type="submit" value="Submit" onClick={this.handleSubmit}/>
        </form>
      </section>
      );
    // }
  }
}


// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log('e.targt', e.target);

//   console.log('e', e);
//   console.log('value', e.value);
// };

// If movie is rated - show rating, otherwise show button

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

export default MovieDetailsPage;
