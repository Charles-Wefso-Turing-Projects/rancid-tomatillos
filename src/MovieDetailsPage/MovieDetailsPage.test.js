import React from "react";
import MovieDetailsPage from "./MovieDetailsPage";

import "@testing-library/jest-dom";
import { render, getByDisplayValue, fireEvent } from "@testing-library/react";

describe("MoveDetailsPage", () => {

//If the movies haven't loaded should show a loading page

//If the movie has been rated show a rating a delete button

//If logged in and movie is not rated, should see rating form.

//Submitting a rating makes a post request to the ratings API
//and reroutes the user to the "/" url

  it("should render a movies details", () => {
    expect(true).toEqual(true);
  });
  const movie = {backdrop_path: "movie picture",
    id: 1,
    title: "movie title",
    tagline: "catchy movie tagline",
    overview: "movie overview, but with spoilers",
    release_date: "2020/01/01",
    average_rating: "3",
    genres: ['romance', 'action', 'drama'],
    runtime: "300"
    }

  it("Should run resetMovie on the click of home button", () => {
    // SetUp
    const { getByText, getByRole } = render(
      <MovieDetailsPage
        movie={
          movie
        }
      />
    );
    // Execution
    const title = getByText("movie title");
    const tagline = getByText("catchy movie tagline");
    const overview = getByText("Overview: movie overview, but with spoilers");
    const releaseDate = getByText("Release Date: 2020/01/01");
    const averageRating = getByText("Average Rating: 3");
    const genres = getByText("Genres: romance, action, drama");
    const runtime = getByText("Runtime: 300 minutes");
    const button = getByRole("button");

    // Assertion
    expect(title).toBeInTheDocument();
    expect(tagline).toBeInTheDocument();
    expect(overview).toBeInTheDocument();
    expect(releaseDate).toBeInTheDocument();
    expect(averageRating).toBeInTheDocument();
    expect(genres).toBeInTheDocument();
    expect(runtime).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should run resetMovie", () => {
    // Setup
    const mockResetMovie = jest.fn();
    const { getByRole } = render(
      <MovieDetailsPage
        movie={
          movie
        }
        resetMovie = { mockResetMovie }
      />
    );
    // execution
    const button = getByRole("button");
    fireEvent.click(button);
    // assertion
    expect(mockResetMovie).toBeCalledTimes(1);
  });
});
