import React from 'react';
import App from '../App/App'
import { render} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

describe('MoviesContainer', () => {

//Unit Test

  it('Should render a Movie Container', () => {
    //Setup
    const { getByLabelText } = render(<MemoryRouter><App /></MemoryRouter>)

    //Execution
    const MoviesContainer = getByLabelText("all-movies");

    //Assertion
    expect(MoviesContainer).toBeInTheDocument()

  })

})