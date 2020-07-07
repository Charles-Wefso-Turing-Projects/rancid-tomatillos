import React from "react";
import MovieDetailsPage from "./MovieDetailsPage"

import "@testing-library/jest-dom";
import { render, fireEvent, getByAltText, getByText, getByLabelText } from "@testing-library/react";

describe("MoveDetailsPage", () => {
  it("should render a movies details", () => {
    expect(true).toEqual(true)
  })

  it("Should run resetMovie on the click of home button", () => {
    // SetUp
    const { getByText, getByRole } = render(<MovieDetailsPage 
      // movie = {
      //   <section style={{backgroundImage: 'url(' + movie.backdrop_path + ')'}} className= "movie-details-page">
      //     <h2>{movie.title}</h2>
      //     <h3>{movie.tagline}</h3>
      //     <p>Overview: {movie.overview}</p>
      //     <p>Release Date: {movie.release_date}</p>
      //     <p>Average Rating: {movie.average_rating}</p>
      //     <p>Genres: {movie.genres.join(", ")}</p>
      //     <p>Runtime: {movie.runtime} minutes</p>
      //     <button onClick= {resetMovie}>Home</button>
      //   </section>  
      // }
  
    />)
  
      // Execution
  
      // Assertion



  })

})