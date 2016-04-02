import React from 'react';
import Header from '../Header.js';
import PropTypes from 'react-router';

class Login extends React.Component {

  constructor (props, context) {
    super(props, context);
    this.state = {};

    this.state.username = '';
    this.state.password = '';

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  handleUsernameChange (e) {
    this.setState({username: e.target.value});
  }

  handlePasswordChange (e) {
    this.setState({password: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    console.log(JSON.stringify(this.state));

    // @todo handle unsuccessful login.
    fetch('http://localhost:3000/user/login', {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(this.state),
    }).then(this.redirect);
  }

  redirect () {
    this.context.history.pushState(null, '/');
  }

  render() {
    return <div><Header />
      <form onSubmit={this.handleSubmit}>
          <label>Username
            <input type="text" onChange={this.handleUsernameChange} />
          </label>
          <label>Password
            <input type="password" onChange={this.handlePasswordChange} />
          </label>
          <input type="submit" value="Login" />
      </form>
    </div>;
  }
}

Login.contextTypes = {
  history: PropTypes.history
};

module.exports = Login;
