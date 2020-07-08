import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({adapter: new Adapter()});
import LoginForm from './LoginForm';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import App from '../App/App.js';

describe('LoginForm', () => {

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

   it('Should render the homepage on click of the home button', () => {
    //Setup

   const mockGetUserData = jest.fn();
   
   const wrapper = mount(
     <MemoryRouter initialEntries={[ '/' ]}>
       <App/>
     </MemoryRouter>
   );

   const { getByLabelText } = render(<BrowserRouter><LoginForm 
     getUserData= { mockGetUserData } 
   /></BrowserRouter>)
 
   //Execution
   const button = getByLabelText("submit");
   fireEvent.click(button)
   //Assertion
   expect(wrapper.find(App)).toHaveLength(1);
 });

 //It should return a successful response if POST is made with correct inputs

 //It should return an error if the information was incorrect
});