import React, { Component } from 'react';
import './Movie.css'

class Movie extends Component {
  constructor({movie, setID, userRatings, id, loggedIn}){
    super({movie, setID, userRatings, id, loggedIn});
    // this.state = {
    //   ratingsloaded: false,
    // }
  }

  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   
  //       this.setState({
  //         ratingsloaded: true,
  //         userRatings: null
  //       })
  //   }
  //   this.findRatingsOfUser()
  // }

 // We want to get the user ratings of the individual movie posted
 findRatingsOfUser = () => {
   if(this.state.ratings === true ) {
     return this.props.userRatings.ratings.forEach(rating => {
       if(rating.movie_id === this.props.movie.id){
         this.setState({
           userRatings : rating.rating
          })
        }
      })
    }
  }

  
  render() {
    // if user is not logged in
  if(!this.props.loggedIn) {
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
  // logged in User
 


    // We want to display if a user has rated an individual movie
   if(this.state.userRatings){
      console.log('Hit');
      
      return(
        <section className= "movie" id={this.props.id}>
        <h2 >{this.props.movie.title} </h2>
        <img src={this.props.movie.poster_path} 
          alt="poster" 
          className="poster"
          />
        <h3 aria-label="average-rating">Average Rating: { this.props.movie.average_rating.toFixed(2)}</h3>
        <h3 aria-label="user-rating">Your Rating: { this.state.userRatings }</h3>
      </section>
        )

    }
    console.log(this.state.userRatings);
    // otherwise, display that it hasn't been rated
    return(
      <section className= "movie" id={this.props.id}>
      <h2 >{this.props.movie.title} </h2>
      <img src={this.props.movie.poster_path} 
        alt="poster" 
        className="poster"
        />
      <h3 aria-label="average-rating">Average Rating: { this.props.movie.average_rating.toFixed(2)}</h3>
      <h3 aria-label="user-rating">Not Yet Rated</h3>
    </section>
    )
  }

  
}

export default Movie


// if user is logged in, render this with user button, else return below



