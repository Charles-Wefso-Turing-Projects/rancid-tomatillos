import React from 'react';
import LoggedInUser from './LoggedInUser';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';


describe('LoggedInUser', () => {

  it('Should render a MovieContainer, a button, and an h1', () => {
    //Setup
    const user = {
      name: "Lucy"
    }

    const { getByLabelText, getByRole, getByText } = render(<LoggedInUser 
                movies= {[]} 
                loggedInUserData={ {user} } 
    />)
  
    //Execution
    const MovieContainer = getByLabelText("all-movies");
    const button = getByRole("button")
    const header = getByText("Hello Lucy")
    //Assertion

    expect(MovieContainer).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(header).toBeInTheDocument()
  });


 //It should return a successful response if POST is made with correct inputs

 //It should return an error if the information was incorrect

 

});