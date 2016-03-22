import React from 'react';
import { Link, IndexLink } from 'react-router';

class Navigation extends React.Component {
  render() {
    return <ul>
      <li><IndexLink to={'/'}>Home</IndexLink></li>
      <li><Link to={'/about'}>About us</Link></li>
    </ul>
  }
}

module.exports = Navigation;
