import React from 'react';
import loggedInUser from './loggedInUser';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('loggedInUser', () => {

  it('Should render a Movie Container', () => {
    //Setup
    const { getByLabelText } = render(<loggedInUser
      movies= {[]} 
      />)
    //Execution
    const MovieContainer = getByLabelText("all-movies");
    //Assertion
    expect(MovieContainer).toBeInTheDocument()
  })

})