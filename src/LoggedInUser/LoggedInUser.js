import React, {Component} from 'react'
import './LoggedInUser.css'
import MoviesContainer from "../MoviesContainer/MoviesContainer";
import MovieDetailsPage from "../MovieDetailsPage/MovieDetailsPage"
import { getSingleMovie } from "../apiCalls"

class LoggedInUser extends Component{
  constructor(props){
    super(props)
    this.state = {
      selectedMovie : null
    }
    this.url = "https://rancid-tomatillos.herokuapp.com/api/v2"
  }

  setID = (e) => {
    const {id} = e.target.closest(".movie");
    this.getMovieData(id)
  }

  resetMovie = () => {
    this.setState({
      selectedMovie : null
    })
  }

  getMovieData(id) {
    getSingleMovie(id)
    .then(
      (data) => {
        this.setState({
          selectedMovie : data.movie
        })
      })
    .catch((error) => {
      alert(`yo, this is wrong:  ${error}`)
    })
  }

  render(){
    if(this.state.selectedMovie !== null) {
      return(
        <section>
          <MovieDetailsPage movie= {this.state.selectedMovie} resetMovie= {this.resetMovie}/>
        </section>
      )
    } else {
    return(
      <main className="LoggedInUserMainPage">
        <h1>Hello { this.props.name }</h1>
        <button aria-label="logoutButton" onClick={this.props.refreshPage}>Logout</button>
        <MoviesContainer movies={this.props.movies} setID= {this.setID} getMovieData= {this.getMovieData}/>
      </main>
    )}
  }
}

export default LoggedInUser