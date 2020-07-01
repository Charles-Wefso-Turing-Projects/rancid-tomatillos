import React, {Component} from 'react';

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      email : "",
      password : ""
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name] : value})
  }
  
  resetForm = () => {
    this.setState({
      email: "",
      password: ""
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.getUserData(this.state.email, this.state.password)
    this.resetForm()
  }

  render(){
    const {email, password} = this.state
    return(
      <form onSubmit= {this.handleSubmit}>
        <input 
          type= "text"
          name= "email"
          value= {email}
          placeholder= "email"
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