import React, { Component } from "react";
import "./MovieDetailsPage.css";
import { deleteComment, getMovie, postUserMovieRating } from "../apiCalls";
import { NavLink } from "react-router-dom";
import CommentForm from "../CommentForm/CommentForm.js";
import CommentContainer from "../CommentContainer/CommentContainer.js";
import PropTypes from 'prop-types';

class MovieDetailsPage extends Component {
  constructor() {
    super();
    this.state = {
      selectedValue: "",
      selectedMovie: null,
      ratings: false,
      comments: [],
      timeToUpdate: false
    };
  }

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
  }


  componentDidUpdate(prevProps) {
    if (this.props.userRatings !== prevProps.ratings) {
      this.setState({
        ratings: true,
      });
    }
  }

  addComment = (comment) => {
    const newComment = {
      ...comment, id : Date.now()
    };
    const comments = [...this.state.comments, newComment];
    this.setState({ comments });
    this.props.history.push(`/${this.props.movie.id}`)
  }

  removeComment = (id) => {
    deleteComment(id)
    const comments = this.state.comments.filter(comment => id !== comment.id);
    this.setState({ comments });
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ selectedValue: value });
  };

  handleDeleteRating = (e) => {
    e.preventDefault();
    this.props.deleteRating(this.props.movie.user_id, this.props.movie.rating_id)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    postUserMovieRating(
      this.props.user.id,
      this.state.selectedValue,
      this.props.movie.id
    )
      .catch((error) => {
        console.log(error);
        alert(`yo, this is wrong:  ${error}`);
      })
      .then(this.props.history.push("/"));
  };

  setTimeToUpdate = (bool = false) => {
    this.setState({
      timeToUpdate: bool
    })
  }

  render() {
    if (this.state.selectedMovie === null) {
      return (
        <section>
          <h1>Loading...</h1>
        </section>
      );
    }

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

        {this.props.movie.rated ? (
          <div>
            <p>Your Rating: {this.props.movie.rated}</p>
            <button onClick={ this.handleDeleteRating } aria-label="delete-rating" type="button" >Delete</button>
          </div>
        ) : (
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
            <input type="submit" value="Submit" onClick={this.handleSubmit} />
          </form>
        )}
        <NavLink to="/" className="home">
          <h3 aria-label="home">HOME</h3>
        </NavLink>
        <CommentContainer movie={this.props.movie} removeComment= {this.removeComment} timeToUpdate={this.state.timeToUpdate} setTimeToUpdate={this.setTimeToUpdate} />
        <CommentForm addComment= {this.addComment} movie= {this.props.movie} setTimeToUpdate= {this.setTimeToUpdate}/>
      </section>
    );
    // }
  }
}

export default MovieDetailsPage;

MovieDetailsPage.propTypes = {
  movie : PropTypes.object,
  user : PropTypes.object,
  submitUserMovieRating : PropTypes.func,
  userRating : PropTypes.object,
  getMovieData : PropTypes.func,
  selectedMovie : PropTypes.object,
  deleteRating : PropTypes.func
}