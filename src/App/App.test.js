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

  //If not logged in, should render <h2> NavLink to login and MoviesContainer

  //If logged in should render <h1> greeting, logout button and MoviesContainer

  //What fetch methods do we need to be testing?

  beforeEach(async () => { 
    await getAllMovies.mockResolvedValueOnce(sampleMoviesData)
  })
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  // getAllMovies.mockResolvedValue()
  it('A user should see a homepage displaying a container for movies, a header and a login button', () => {
    //Setup
    const { getByLabelText, getByText } = render(<BrowserRouter><App 
                movies= {sampleMoviesData} 
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

  it('A user should see all movies succesfully fetched from API on page load', async () => {
    // Render the App component (this component fetches data from an external back-end API)
    const { getByText } = render(<BrowserRouter><App movies= {sampleMoviesData}/></BrowserRouter>)
    // Check that there is a container element on the page
    
    const movieOne = await waitFor( () => getByText("Artemis Fowl"))
    expect(movieOne).toBeInTheDocument
})

 //It should return an error if the information was incorrect

  // it('should be able to see a user greeting when logged in', async () => {
  //   const email= 'lucy@turing.io'
  //   const password= 'password1'
    
  //   // const sampleloginPost = [{
  //   //   // id: 1,
  //   //   // name: 'Lucy',
  //   //   email: 'lucy@turing.io',
  //   //   password: 'password1'
  //   // }]
  // await getUserData.mockResolvedValueOnce(email, password)
  // await callUserData.mockResolvedValueOnce(email, password)
  // //  We need to define router in every single test - NOT in beforeEach -> issues
  //   const router = (<BrowserRouter> <App /> </BrowserRouter>)
  //   // don't have to import getByText etc, because render KNOWS them
  //   const { getByText, getByPlaceholderText, getAllByRole } = render(router)
  //   fireEvent.click(getByText('Login'))
  //   //verify that we went to the login page
  //   expect(getByText("Login Page")).toBeInTheDocument()
  //   // User is logging into the app
  //   fireEvent.change(getByPlaceholderText('email'), {
  //     target: { value: 'lucy@turing.io'},
  //   })
  //   fireEvent.change(getByPlaceholderText('password'), {
  //     target: { value: 'password1'},
  //   })
  //   // User clicks button
  //   fireEvent.click(getByText('Submit'))
  //   // Fetch Call starts
  //   await setTimeout(waitFor(() => { expect(getByText('Hello')).toBeInTheDocument() } ), 3000)
  //   // Another way to test mockData is showing
  //   // const images = getAllByRole('img');
  //   // expect(images).toHaveLength(3)
  // })

});