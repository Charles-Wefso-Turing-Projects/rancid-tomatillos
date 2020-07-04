import React from 'react';
import MoviesContainer from './MoviesContainer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('MoviesContainer', () => {

  it('Should render a Movie Container', () => {
    //Setup
    const { getByLabelText } = render(<MoviesContainer
                movies= {[]} 
                />)
    //Execution
    const MovieContainer = getByLabelText("all-movies");
    //Assertion
    expect(MovieContainer).toBeInTheDocument()
  })

})