import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { getAllMovies } from '../apiCalls';
jest.mock('../apiCalls')
import {render, fireEvent, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  getAllMovies.mockResolvedValue({"movies":[{"id":475430, "poster_path":"https://image.tmdb.org/t/p/original//tI8ocADh22GtQFV28vGHaBZVb0U.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//o0F8xAt8YuEm5mEZviX5pEFC12y.jpg","title":"Artemis Fowl","average_rating":5.75,"release_date":"2020-06-12"}, {"id":338762,"poster_path":"https://image.tmdb.org/t/p/original//8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//lP5eKh8WOcPysfELrUpGhHJGZEH.jpg","title":"Bloodshot","average_rating":9.5,"release_date":"2020-03-05"}]})
  it('Should render a MovieContainer, a button, and an h1', () => {
    //Setup
    const { getByLabelText, getByRole, getByText } = render(<BrowserRouter><App 
                movies= {[]} 
    /></BrowserRouter>)
  
    //Execution
    const MovieContainer = getByLabelText("all-movies");
    const button = getByText("Login")
    const header = getByText("Rancid Tomatillos")
    //Assertion

    expect(MovieContainer).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(header).toBeInTheDocument()
  });

  it('Should render ideas from the server when loaded', async () => {
    // Render the App component (this component fetches data from an external back-end API)
    const { getByText } = render(<BrowserRouter><App /></BrowserRouter>)
    // Check that there is a container element on the page
    
    const movieOne = await waitFor( () => getByText("Artemis Fowl"))
    expect(movieOne).toBeInTheDocument
})


 //It should return a successful response if POST is made with correct inputs

 //It should return an error if the information was incorrect

 

});