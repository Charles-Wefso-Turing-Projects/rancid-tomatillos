import React from 'react'
import './LoggedInUser.css'
import LoginButton from "../LoginButton/LoginButton.js";
import MoviesContainer from "../MoviesContainer/MoviesContainer.js";


const LoggedInUser = ({movies, loggedInUserData, triggerForm}) => {
  const name = loggedInUserData.data.user.name
  return(
    <main className="LoggedInUserMainPage">
      <h1>Hello { name }</h1>
      <LoginButton triggerForm={triggerForm} />
      <MoviesContainer movies={movies} />
    </main>
  )
}

export default LoggedInUser