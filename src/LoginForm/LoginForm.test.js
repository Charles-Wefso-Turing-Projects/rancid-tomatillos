import React from 'react';
import LoginForm from './LoginForm';
import { BrowserRouter, Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';

describe('LoginForm', () => {

  it('Should render a header, paragraph, and button', () => {
    //Setup
    const { getByLabelText } = render(<BrowserRouter><LoginForm 
                getUserData= {jest.fn()} 
                refreshPage = {jest.fn()}
    /></BrowserRouter>)
  

    const emailInput = getByLabelText("enter-email-address");
    const passwordInput = getByLabelText("enter-password");
    const submitButton = getByLabelText("submit");
    const closeButton = getByLabelText("home");

    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
    expect(closeButton).toBeInTheDocument()
  });


  it('Should run getUserData on click of the submit button', () => {


   const mockGetUserData = jest.fn();

   const { getByLabelText } = render(<BrowserRouter><LoginForm 
     getUserData= { mockGetUserData } 
   /></BrowserRouter>)
 

   const button = getByLabelText("submit");
   fireEvent.click(button)
 

   expect(mockGetUserData).toBeCalledTimes(1);
 });

  it('Should change the current location when a NavLink is clicked', () => {
    const testHistory = createMemoryHistory();
    const { getByRole } = render(<Router history={testHistory}><LoginForm /></Router>)

    const homeLink = getByRole('link', {name: 'home'})

    fireEvent.click(homeLink)

    expect(testHistory.location.pathname).toEqual('/')

  })

});