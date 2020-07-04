import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginButton from '../LoginButton/LoginButton';


it('renders the App component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the LoginButton without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('renders the MoviesContainer without crashing', () => {
//   const div = document.createElement('div');
//   console.log(movies)
//   ReactDOM.render(<MoviesContainer movies= {movies}/>, div);
//   ReactDOM.render(<Movie />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });