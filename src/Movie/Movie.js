import React, { Component } from 'react';
import './Movie.css'

class Movie extends Component {
  constructor({movie, setID, userRatings, id, loggedIn}){
    super({movie, setID, userRatings, id, loggedIn});
    this.state = {
      rated: false,
    }
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.userRatings !== prevProps.userRatings) {
        this.setState({
          rated: true
        })
    }
  }

  
  render() {


    if(this.state.rated === true && this.props.userRatings !== null) {
      const movieUserRating = this.props.userRatings.ratings.map(rating => {
        if(rating.movie_id === this.props.movie.id){
          return rating.rating
        }
    })  

      return(
          <section className= "movie" id={this.props.id}>
            <h2 >{this.props.movie.title} </h2>
            <img src={this.props.movie.poster_path} 
              alt="poster" 
              className="poster"
              />
            <h3 aria-label="average-rating">Average Rating: { this.props.movie.average_rating.toFixed(2)}</h3>
            <h3 aria-label="user-rating">Your Rating: { movieUserRating }</h3>
            <button>Logged In</button>
          </section>
      )
    }

    return(
      <section className= "movie" id={this.props.id} onClick= {this.props.setID} >
      <h2 >{this.props.movie.title} </h2>
      <img src={this.props.movie.poster_path} 
            alt="poster" 
            className="poster"
            />
      <h3 aria-label="average-rating">Average Rating: { this.props.movie.average_rating.toFixed(2)}</h3>
    </section>
    )
  }
}

export default Movie


// if user is logged in, render this with user button, else return below



