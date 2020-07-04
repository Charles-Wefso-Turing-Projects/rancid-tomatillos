import React from 'react'
import './LoggedInUser.css'
import MoviesContainer from "../MoviesContainer/MoviesContainer.js";


const LoggedInUser = ({movies, loggedInUserData, refreshPage, showMovie}) => {
  const name = loggedInUserData.data.user.name
  return(
    <main className="LoggedInUserMainPage">
      <h1>Hello { name }</h1>
      <button aria-label="logoutButton" onClick={refreshPage}>Logout</button>
      
      <MoviesContainer movies={movies} showMovie= {showMovie}/>
    </main>
  )
}

export default LoggedInUser