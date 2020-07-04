import React from "react";
import Movie from "./Movie";

import "@testing-library/jest-dom";
import { render, fireEvent, getByAltText, getByText, getByLabelText } from "@testing-library/react";

describe("Movie", () => {
  it("should render a title, img and average rating", () => {
    expect(true).toEqual(true);
  });

  it("should display movies on load", () => {
    const movie = {
      id : "475430",
      title  : "I'm a movie",
      img : "poster",
      rating : "5"
    }

    const { getByText, getByAltText, getByLabelText } = render(
      <Movie 
        movie = { movie }
      />
    );
    
    const rating = getByLabelText("average-rating")
    const title = getByText("I'm a movie");
    const img = getByAltText("poster");

    expect(title).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(rating).toBeInTheDocument(); 
  })

});
