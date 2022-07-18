import React from 'react';
import './App.css';

class App extends React.component {

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

render () {
  return (
    <>
      <h1>test</h1>
    </>
  );
}
}

export default App;
