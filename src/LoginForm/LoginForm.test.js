import React from 'react';
import LoginForm from './LoginForm';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('LoginForm', () => {

  it('Should render a header, paragraph, and button', () => {
    //Setup
    const { getByLabelText } = render(<LoginForm 
                getUserData= {jest.fn()} 
                refreshPage = {jest.fn()}
    />)
  
    //Execution
    const emailInput = getByLabelText("enter-email-address");
    const passwordInput = getByLabelText("enter-password");
    const submitButton = getByLabelText("submit");
    const closeButton = getByLabelText("close");
    //Assertion
    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
    expect(closeButton).toBeInTheDocument()
  });

  
  it('Should run refreshPage on click of the close button', () => {
     //Setup

    const mockRefreshPage = jest.fn();

    const { getByLabelText } = render(<LoginForm 
      getUserData= {jest.fn()} 
      refreshPage = { mockRefreshPage }
    />)
  
    //Execution
    const button = getByLabelText("close");
    fireEvent.click(button)
  
    //Assertion
    expect(mockRefreshPage).toBeCalledTimes(1);
  });

  it('Should run getUserData on click of the submit button', () => {
    //Setup

   const mockGetUserData = jest.fn();

   const { getByLabelText } = render(<LoginForm 
     getUserData= { mockGetUserData } 
     refreshPage = { jest.fn() }
   />)
 
   //Execution
   const button = getByLabelText("submit");
   fireEvent.click(button)
 
   //Assertion
   expect(mockGetUserData).toBeCalledTimes(1);
 });

 //It should return a successful response if POST is made with correct inputs

 //It should return an error if the information was incorrect

 

});