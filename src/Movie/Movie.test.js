import React from "react";
import Movie from "./Movie";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from 'react-router-dom';


describe("Movie", () => {

  it("should display movies on load", () => {
    const movie = {
      id : "475430",
      title  : "I'm a movie",
      img : "poster",
      rating : "5",
      average_rating : 8
    }

    const { getByText, getByAltText, getByLabelText } = render(
      <BrowserRouter><Movie movie = {movie}/></BrowserRouter>
    )
      
    const averageRating = getByLabelText("average-rating")
    const title = getByText("I'm a movie");
    const img = getByAltText("poster");

    expect(title).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(averageRating).toBeInTheDocument(); 
  })

  it("should display user rating if user is logged in", () => {
    const movie = {
      id : "475430",
      title  : "I'm a movie",
      img : "poster",
      rated : "5",
      average_rating : 8,
    }

    const { getByLabelText } = render(
      <MemoryRouter><Movie movie = {movie} loggedIn= {true}/></MemoryRouter>
    )

    const userRating = getByLabelText("user-rating")

    expect(userRating).toBeInTheDocument();

  })

  it("should display 'No User Rating' if the movie has not been rated", () => {
    const movie = {
      id : "475430",
      title  : "I'm a movie",
      img : "poster",
      rated : null,
      average_rating : 8,
    }

    const { getByText } = render(
      <MemoryRouter><Movie movie = {movie} loggedIn= {true}/></MemoryRouter>
    )
    
    const noRating = getByText("No User Rating")

    expect(noRating).toBeInTheDocument()
  })

  it("should display user rating if the movie has been rated", () => {
    const movie = {
      id : "475430",
      title  : "I'm a movie",
      img : "poster",
      rated : 5,
      average_rating : 8,
    }
    
    console.log(movie)

    const { getByText } = render(
      <MemoryRouter><Movie movie = {movie} loggedIn= {true} rated= {movie.rated}/></MemoryRouter>
    )
    
    const rating = getByText("Your rating : 5")

    expect(rating).toBeInTheDocument()
  })

});
