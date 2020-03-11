import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  return (
    <div className="FormCenter">
      <form onSubmit={this.handleSubmit} className="FormFields">
        <div className="FormField">
          <label className="FormField__Label" htmlFor="name">Full Name</label>
          <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
        </div>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="password">Password</label>
          <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={passwordText} onChange={handleChange} />
        </div>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
          <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={emailText} onChange={this.handleChange} />
        </div>

        <div className="FormField">
          <label className="FormField__CheckboxLabel">
            <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={} onChange={handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
          </label>
        </div>

        <div className="FormField">
          <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;