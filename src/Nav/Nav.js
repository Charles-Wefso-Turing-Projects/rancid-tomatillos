import React from 'react';

const Nav = ({triggerForm}) => {
  return(
    <section className= "nav-bar">
      <h1>Rancid Tomatillos</h1>
      <button onClick= {triggerForm}>Login</button>
    </section>
  )
}

export default Nav;