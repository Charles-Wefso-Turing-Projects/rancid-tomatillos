import React, {Component} from 'react';

class LoginForm extends Component {
  constructor(){
    super();
    this.state = {
      username : "",
      password : ""
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name] : value})
  } 

  render(){
    const {username, password} = this.state
    return(
      <form>
        <input 
          type= "text"
          name= "username"
          value= {username}
          placeholder= "username"
          onChange= {this.handleChange}
        />
        <input 
          type= "text"
          name= "password"
          value= {password}
          placeholder= "password"
          onChange= {this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default LoginForm;