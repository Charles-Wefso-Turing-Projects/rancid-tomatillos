import React, { Component } from 'react';
import LoginButton from '/Users/cwefso/turing/module3/projects/rancid-tomatillos/src/LoginButton/LoginButton.js'


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies : []
    }
    const URL = {https://rancid-tomatillos.herokuapp.com/api/v2}
  }

  render(){
    return(
      <main className= "App">
        <h1>Rancid Tomatillos</h1>
        <LoginButton />
      </main>
    )
  }
}


export default App;
