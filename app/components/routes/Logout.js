import React from 'react';
import Header from '../Header.js';
import PropTypes from 'react-router';
import { connect } from 'react-redux'

import { setLogout } from '../../actions';

class Logout extends React.Component {

  constructor (props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();

    // @todo handle unsuccessful login.
    fetch('http://localhost:3000/user/logout', {
      method: 'POST',
      mode: 'cors',
    }).then(this.redirect);
  }

  redirect () {
    this.context.store.dispatch(setLogout());
    this.context.router.push('/');
  }

  render() {
    return <div><Header />
      <form onSubmit={this.handleSubmit}>
          <input type="submit" value="Logout" />
      </form>
    </div>;
  }
}
Logout.contextTypes = {
  router: React.PropTypes.object.isRequired,
  store: React.PropTypes.object
};

module.exports = Logout;

