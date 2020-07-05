import React, { Component } from "react";
import "./LoggedInUser.css";
import Nav from "../Nav/Nav";
import MoviesContainer from "../MoviesContainer/MoviesContainer.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class LoggedInUser extends Component {
  constructor(
    movies,
    loggedInUserData,
    refreshPage,
    showMovieDetailsPage,
    loggedIn
  ) {
    super(
      movies,
      loggedInUserData,
      refreshPage,
      showMovieDetailsPage,
      loggedIn
    );
    this.state = {
      selectedMovie: {},
    };
    console.log(movies);
  }

  showMovieDetailsPage = (e) => {
    const { id } = e.target.closest(".movie");
    fetch(`${this.url}/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          selectedMovie: data,
        });
      })
      .catch((error) => {
        console.log(error);
        alert(`yo, this is wrong:  ${error}`);
      });
  };

  Home = () => (
    <div>
      <LoggedInUser />
    </div>
  );

  // const name = loggedInUserData.data.user.name;
  render() {
    return (
      <Router>
        <main className="LoggedInUserMainPage">
          <Nav
            loggedInUserData={this.loggedInUserData}
            refreshPage={this.refreshPage}
            loggedIn={this.loggedIn}
          />

          <Switch />
          <Route path="/" exact component={this.Home} />
          <button aria-label="logoutButton" onClick={this.refreshPage}>
            Logout
          </button>
          {/* we want to build into the movies as individual 
        routed pages 
        When we click on a movie page, we have to capture
        all the movie detail as it renders*/}
          <MoviesContainer
            movies={this.movies}
            showMovieDetailsPage={this.showMovieDetailsPage}
          />
        </main>
      </Router>
    );
  }
}

export default LoggedInUser;

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
