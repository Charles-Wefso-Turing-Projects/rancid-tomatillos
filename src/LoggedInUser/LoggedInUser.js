import React from 'react'
import './LoggedInUser.css'
import MoviesContainer from "../MoviesContainer/MoviesContainer.js";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


const LoggedInUser = ({movies, loggedInUserData, refreshPage, showMovieDetailsPage}) => {
  const name = loggedInUserData.data.user.name
  return(
    <main className="LoggedInUserMainPage">
      <h1>Hello { name }</h1>
      <button aria-label="logoutButton" onClick={refreshPage}>Logout</button>
      
      <MoviesContainer movies={movies} showMovieDetailsPage= {showMovieDetailsPage}/>
    </main>
  )
}

// return (
//   <Router>
//     <div className="App">
//       <Nav />
//       <Switch>
//         <Route path="/" exact component={Home}/>  
//         {/* "/" means whatever your homepage is */}
//         {/* Switch only renders the url that matches the path */}
//         {/* exact -> good practice for home page only rendering when needed */}
//         <Route path="/about" component ={About} />
//         <Route path="/shop" component={Shop} />
//       </Switch>
//     </div>
//   </Router>
// );

export default LoggedInUser