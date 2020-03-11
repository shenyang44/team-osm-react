import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';


import './App.css';
import LoginPage from './pages/LoginPage';

function App() {
  const [emailText, setEmailText] = useState('')
  const [passwordText, setPasswordText] = useState('')


  const handleChange = (e) => {
    if (e.target.id == 'email') {
      setEmailText(e.target.value)
    }
    else {
      setPasswordText(e.target.value)
    }
    console.log(emailText)
    console.log(passwordText)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <LoginPage />
      <Route exact path="/sign-up">
        <SignUpForm handleChange={handleChange} handleSubmit={handleSubmit} />
      </Route>
      <Route path="/sign-in">
        <SignInForm handleChange={handleChange} handleSubmit={handleSubmit} />
      </Route>
    </>
  );
}


export default App;