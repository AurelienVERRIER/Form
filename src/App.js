import React from 'react';
import './App.css';

class App extends React.Component {

constructor () {
  super ()
  this.state = {
    firsName: "",
    email: "",
    password: "",
    rememberMe: false,
    emailIsValid: false,
    passwordIsValid: false,
    isSubmitted: false
  }
}





handleEmailChange = (e) => {
  this.setState({email: e.target.value})
  if (/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.state.email)) {
    this.setState({emailIsValid: true})
}
}

handlePasswordChange = (e) => {
  this.setState({password: e.target.value})

  if (this.state.password.length >5) {
    this.setState({passwordIsValid: true})
  }
}

handleRememberMeChange = (e) => {
  this.setState({rememberMe: true})
}

handleSubmit = (e) => {
  e.preventDefault();
  if (this.state.emailIsValid && this.state.passwordIsValid) {
    this.setState({isSubmitted: true})
  } 
}



render () {

  const emailIsValid = this.state.emailIsValid
  const passwordIsValid = this.state.passwordIsValid

  return (
    <>
      
      <form onSubmit={this.handleSubmit}>

        <div className="form-group">
          <label htmlFor="inputFirstName">First Name</label>
          <input type="text" onChange={this.handleLastNameChange} className="form-control" id="inputFirstName"  placeholder="Enter your First Name"/>
        </div>

        {emailIsValid ? (

        <div className="form-group">
          <label htmlFor="inputEmail1">Email address</label>
          <input type="email" onChange={this.handleEmailChange} className="form-control is-valid" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>

        ) : (

        <div className="form-group">
          <label htmlFor="inputEmail1">Email address</label>
          <input type="email" onChange={this.handleEmailChange} className="form-control is-invalid" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>

        )}
        
        
        {passwordIsValid ? (

        <div className="form-group">
          <label htmlFor="inputPassword1">Password</label>
          <input type="password" onChange={this.handlePasswordChange} className="form-control is-valid" id="inputPassword1" placeholder="Password"/>
        </div>

        ) : (

        <div className="form-group">
          <label htmlFor="inputPassword1">Password</label>
          <input type="password" onChange={this.handlePasswordChange} className="form-control is-invalid" id="inputPassword1" placeholder="Password"/>
        </div>

        )}
        
        
        

        
        <div className="form-group form-check">
          <input type="checkbox" onChange={this.handleRememberMeChange} className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
        </div>
        
        <button type="submit"  className="btn btn-primary">Submit</button>
      
      </form>

      {/* )} */}

    </>
  )
}
}

export default App;
