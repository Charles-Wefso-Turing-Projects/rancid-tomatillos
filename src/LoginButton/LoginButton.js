import React from 'react';

const LoginButton = ({triggerForm}) => {
  return(
    <section className= "login-button">
      <button onClick= {triggerForm}>Login</button>
    </section>
  )
}

export default LoginButton;