import React, { Component } from 'react';
import './App.css';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
      email: ''
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
      <div className="form">
          <h1>Hello!</h1>
          <p>Enter your name:</p>
          <input
            type='text'
            name='username'
            onChange={this.myChangeHandler}
          />
          <p>Enter your age:</p>
          <input
            type='text'
            name='age'
            onChange={this.myChangeHandler}
          />
          <p>Enter your email:</p>
          <input
            type='email'
            name='email'
            onChange={this.myChangeHandler}
          />
          <div className="createAccount">
            <div className="button">
                <button type="submit">Create Account</button>
            </div>
                <small>Already Have an Account?</small>
          </div>
        </div>
      </form>
    );
  }
}

export default MyForm;
