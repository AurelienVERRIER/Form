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

// handleEmailChange = () => {

// }

// handlePasswordChange = () => {

// }

// handleRememberMeChange = () => {

// }

// handleSubmit = () => {

// }

render () {
  return (
    <>
      {/* <form>
        <label>
          Email address
          <input type="text" name="name" />
        </label>

        <label>
          Password
          <input type="text" name="name" />
        </label>
        <p>Remember me</p>
        <input type="submit" value="Submit" />
      </form>

      <select>
        <option value="Remember ME">Remember me</option>
      </select> */}


      <form>

        <div class="form-group">
          <label for="inputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        
        <div class="form-group">
          <label for="inputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        
        <div class="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label class="form-check-label" for="exampleCheck1">Remember me</label>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      
      </form>

    </>
  )
}
}

export default App;
