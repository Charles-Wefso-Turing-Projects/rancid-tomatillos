import React from 'react';

const Nav = ({triggerForm, loggedInUserData, refreshPage, loggedIn, user}) => {
  // const { name } = loggedInUserData.data.user
  if(!loggedIn)
  return(
    <section className= "nav-bar">
      <h1>Rancid Tomatillos</h1>
      <button onClick= {triggerForm}>Login</button>
    </section>
  )
  else {
    return(
      <section className= "nav-bar">
      <h1>`Hello ${}`</h1>
    </section>
    )
  }
}

export default Nav;