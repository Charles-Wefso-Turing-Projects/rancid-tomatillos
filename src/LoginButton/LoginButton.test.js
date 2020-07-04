import React from 'react';
import LoginButton from './LoginButton';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('LoginButton', () => {

  it('Should render a Login button', () => {
    //Setup
    const { getByRole } = render(<LoginButton
                triggerForm= {jest.fn()} 
                />)
    //Execution
    const button = getByRole("button");
    //Assertion
    expect(button).toBeInTheDocument()
  })

  it('Should run triggerForm when clicked', () => {
    //Setup
    const mockTriggerForm = jest.fn()

    const { getByRole } = render(<LoginButton
                triggerForm= { mockTriggerForm } 
                />)
    //Execution
    const button = getByRole("button");
    fireEvent.click(button)
  
    //Assertion
    expect(mockTriggerForm).toBeCalledTimes(1);
  })
})