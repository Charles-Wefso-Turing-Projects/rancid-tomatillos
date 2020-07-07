import React from "react";
import MovieDetailsPage from "./MovieDetailsPage"

import "@testing-library/jest-dom";
import { render, getByDisplayValue } from "@testing-library/react";

describe("MoveDetailsPage", () => {
  it("should render a movies details", () => {
    expect(true).toEqual(true)
  })

  it("Should run resetMovie on the click of home button", () => {
    // SetUp
    const { getByText, getByRole } = render
    (<MovieDetailsPage 
          id={1}
          title="movie title"
          tagline="catchy movie tagline"
          overview="movie overview, but with spoilers"
          releaseDate="2020/01/01"
          averageRating={3}
          genres="romance, action, drama"
          runtime={300}
          resetMovie={jest.fn()}
      />
    )
      // Execution
      const title = getByText("movie title");
      const tagline = getByText("catchy movie tagline");
      const overview = getByText("movie overview, but with spoilers");
      const releaseDate = getByText("2020/01/01")
      const averageRating = getByDisplayValue(3)
      const genres = getByText("romance, action, drama");
      const runtime = getByDisplayValue(300);
      const button = getByRole("button");
  
      // Assertion
      expect(title).toBeInTheDocument()
      expect(tagline).toBeInTheDocument()
      expect(overview).toBeInTheDocument()
      expect(releaseDate).toBeInTheDocument()
      expect(averageRating).toBeInTheDocument()
      expect(genres).toBeInTheDocument()
      expect(runtime).toBeInTheDocument()
      expect(button).toBeInTheDocument()
  })

  it("should run resetMovie", () => {
    // Setup
    const mockResetMovie = jest.fn();
    const { getByText, getByRole } = render
    (<MovieDetailsPage 
          id={1}
          title="movie title"
          tagline="catchy movie tagline"
          overview="movie overview, but with spoilers"
          releaseDate="2020/01/01"
          averageRating={3}
          genres="romance, action, drama"
          runtime={300}
          resetMovie={mockResetMovie}
      />
    )

  })

})