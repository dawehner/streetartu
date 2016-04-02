import React from 'react';
import { Link, IndexLink } from 'react-router';

class Navigation extends React.Component {
  render() {
    var logInOutLink;
    var additionalLinks;
    var state = this.context.store.getState();
    if (state.loggedIn) {
      logInOutLink = <li><Link to={'/logout'}>Logout</Link></li>;
    }
    else {
      logInOutLink = <li><Link to={'/login'}>Login</Link></li>;
    }
    return <ul>
      <li><IndexLink to={'/'}>Home</IndexLink></li>
      <li><Link to={'/about'}>About us</Link></li>
      { logInOutLink }
      { additionalLinks }
    </ul>
  }
}

Navigation.contextTypes = {
  store: React.PropTypes.object
};

module.exports = Navigation;
