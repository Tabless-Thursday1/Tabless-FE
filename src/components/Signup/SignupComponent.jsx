import React from 'react';
import axios from 'axios';

import './Signup.scss';

class Signup extends React.Component {
  state = {
    credentials: {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axios
      .post('', this.state.credentials) 
      .then(res => {
        localStorage.setItem('token', res.data.payload);
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
         <input
            type="firstName"
            name="firstName"
            value={this.state.credentials.firstName}
            onChange={this.handleChange}
           />
            <input
            type="lastName"
            name="lastName"
            value={this.state.credentials.lastName}
            onChange={this.handleChange}
           />
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            value={this.state.credentials.email}
            onChange={this.handleChange}
          />
          <button>Sign up</button>
        </form>
      </div>
    );
  }
}

export default Signup;
