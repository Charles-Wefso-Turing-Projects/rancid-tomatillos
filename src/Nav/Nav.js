import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = ({loggedIn}) => {
  if(!loggedIn) {
    return(
    <section>
    <h1>Rancid Tomatillos</h1>
    <NavLink to="/login" className= "nav-bar">
      <h3>Login</h3>
    </NavLink>
    </section>
    )
  }
}

export default Nav;