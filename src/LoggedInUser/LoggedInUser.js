import React from "react";
import "./LoggedInUser.css";
import Nav from "../Nav/Nav";
import MoviesContainer from "../MoviesContainer/MoviesContainer.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const LoggedInUser = ({
  movies,
  loggedInUserData,
  refreshPage,
  showMovieDetailsPage,
  loggedIn,
}) => {
  const name = loggedInUserData.data.user.name;
  return (
    <Router>
      <main className="LoggedInUserMainPage">
        <Nav
          loggedInUserData={loggedInUserData}
          refreshPage={refreshPage}
          loggedIn={loggedIn}
        />

        <Switch />
          <Route path="/" exact component={Home} />
        <button aria-label="logoutButton" onClick={refreshPage}>
          Logout
        </button>

        <MoviesContainer
          movies={movies}
          showMovieDetailsPage={showMovieDetailsPage}
        />
      </main>
    </Router>
  );
};

const Home = () => (
  <div>
    <LoggedInUser />
  </div>
)

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

export default LoggedInUser;
