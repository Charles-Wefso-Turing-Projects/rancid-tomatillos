import React from 'react';
import ReactDOM from 'react-dom';
import App, { getUserData } from './App';
import { getAllMovies, callUserData } from '../apiCalls';
jest.mock('../apiCalls')
import {render, fireEvent, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';




const sampleMoviesData = {"movies":
[{"id":475430, 
"poster_path":"https://image.tmdb.org/t/p/original//tI8ocADh22GtQFV28vGHaBZVb0U.jpg",
"backdrop_path":"https://image.tmdb.org/t/p/original//o0F8xAt8YuEm5mEZviX5pEFC12y.jpg",
"title":"Artemis Fowl","average_rating":5.75,"release_date":"2020-06-12"}, 
{"id":338762,"poster_path":"https://image.tmdb.org/t/p/original//8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
"backdrop_path":"https://image.tmdb.org/t/p/original//lP5eKh8WOcPysfELrUpGhHJGZEH.jpg",
"title":"Bloodshot",
"average_rating":9.5,
"release_date":"2020-03-05"}]}

describe('App', () => {

  beforeEach(async () => { 
    await getAllMovies.mockResolvedValueOnce(sampleMoviesData)
  })
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('A user should see a homepage displaying a container for movies, a header and a login button', () => {

    const { getByLabelText, getByText } = render(<BrowserRouter><App 
                movies= {sampleMoviesData} 
    /></BrowserRouter>)
  

    const MovieContainer = getByLabelText("all-movies");
    const button = getByText("Login")
    const header = getByText("Rancid Tomatillos")


    expect(MovieContainer).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(header).toBeInTheDocument()
  });

  it('A user should see all movies succesfully fetched from API on page load', async () => {
   
    const { getByText } = render(<BrowserRouter><App movies= {sampleMoviesData}/></BrowserRouter>)

    const movieOne = await waitFor( () => getByText("Artemis Fowl"))
    expect(movieOne).toBeInTheDocument
})

});