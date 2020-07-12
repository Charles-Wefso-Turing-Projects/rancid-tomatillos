import React from 'react';
import LoginForm from './LoginForm';
import { BrowserRouter, Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';

describe('LoginForm', () => {

  //Should render a  header, inputs, submit button and home link

  //Should change location to "/" when the home button is clicked.

  //It should fire getUserData on a successful response

  //It should reload page with inputs cleared on a failed response

  it('Should render a header, paragraph, and button', () => {
    //Setup
    const { getByLabelText } = render(<BrowserRouter><LoginForm 
                getUserData= {jest.fn()} 
                refreshPage = {jest.fn()}
    /></BrowserRouter>)
  
    //Execution
    const emailInput = getByLabelText("enter-email-address");
    const passwordInput = getByLabelText("enter-password");
    const submitButton = getByLabelText("submit");
    const closeButton = getByLabelText("home");
    //Assertion
    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
    expect(closeButton).toBeInTheDocument()
  });


  it('Should run getUserData on click of the submit button', () => {
    //Setup

   const mockGetUserData = jest.fn();

   const { getByLabelText } = render(<BrowserRouter><LoginForm 
     getUserData= { mockGetUserData } 
   /></BrowserRouter>)
 
   //Execution
   const button = getByLabelText("submit");
   fireEvent.click(button)
 
   //Assertion
   expect(mockGetUserData).toBeCalledTimes(1);
 });

  it('Should change the current location when a NavLink is clicked', () => {
    const testHistory = createMemoryHistory();
    const { getByRole } = render(<Router history={testHistory}><LoginForm /></Router>)
    
    // expect(testHistory.location.pathname).toEqual('/login')

    const homeLink = getByRole('link', {name: 'home'})

    fireEvent.click(homeLink)

    expect(testHistory.location.pathname).toEqual('/')

  })

//    it('Should render the homepage on click of the home button', () => {
//     //Setup

//    const mockGetUserData = jest.fn();
   
//    const wrapper = shallow(
//      <MemoryRouter initialEntries={[ '/' ]}>
//        <App/>
//      </MemoryRouter>
//    );

//    const { getByLabelText } = render(<BrowserRouter><LoginForm 
//      getUserData= { mockGetUserData } 
//    /></BrowserRouter>)
 
//    //Execution
//   //  const LoginForm = getByLabelText("login-form");
//    const button = getByLabelText("home");
//   //  expect(LoginForm).toBeInTheDocument

//    fireEvent.click(button)
//    //Assertion
//    expect(wrapper.find(App)).toHaveLength(1);
//  });

 //It should return a successful response if POST is made with correct inputs

 //It should return an error if the information was incorrect
});