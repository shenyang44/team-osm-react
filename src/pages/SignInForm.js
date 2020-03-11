import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

const SignInForm = () => {



  return (
    <div className="FormCenter">
      <form onSubmit={handleSubmit} className="FormFields">
        <div className="FormField">
          <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
          <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={emailText} onChange={handleChange} />
        </div>

        <div className="FormField">
          <label className="FormField__Label" htmlFor="password">Password</label>
          <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={passwordText} onChange={handleChange} />
        </div>

        <div className="FormField">
          <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
        </div>
      </form>
    </div>
  );
}


export default SignInForm;