import React from 'react';
import App from '../App/App'
import { render} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

describe('MoviesContainer', () => {

  it('Should render a Movie Container', () => {

    const { getByLabelText } = render(<MemoryRouter><App /></MemoryRouter>)

    const MoviesContainer = getByLabelText("all-movies");

    expect(MoviesContainer).toBeInTheDocument()

  })

})