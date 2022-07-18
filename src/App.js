import React from 'react';
import './App.css';

class App extends React.Component {

constructor () {
  super ()
  this.state = {
    email: "",
    password: "",
    rememberMe: false,
    emailIsValid: false,
    passwordIsValid: false,
    isSubmitted: false
  }
}


// emailsValid = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.state.email);




handleEmailChange = (e) => {
  this.setState({email: e.target.value})
  if ('/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/'.test(this.state.email)) {
    this.setState({emailIsValid: "true"})
}
}

handlePasswordChange = (e) => {
  this.state({password: e.target.value})
  
  if (this.state.password.length >5) {
    this.setState({passwordIsValid:"true"})
  }
}

handleRememberMeChange = (e) => {
  this.setState({rememberMe: "true"})
}

handleSubmit = (e) => {
  e.preventDefault();
  if (this.state.emailIsValid && this.state.passwordIsValid) {
    this.setState({isSubmitted: "true"})
  } 
}

render () {
  return (
    <>

      <form>

        <div class="form-group">
          <label for="inputEmail1">Email address</label>
          <input type="email" onChange={this.handleEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        
        <div class="form-group">
          <label for="inputPassword1">Password</label>
          <input type="password" onChange={this.handlePasswordChange} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        
        <div class="form-group form-check">
          <input type="checkbox" onChange={this.handleRememberMeChange} className="form-check-input" id="exampleCheck1"/>
          <label class="form-check-label" for="exampleCheck1">Remember me</label>
        </div>
        
        <button type="submit" onSubmit={this.handleSubmit} className="btn btn-primary">Submit</button>
      
      </form>

    </>
  )
}
}

export default App;
