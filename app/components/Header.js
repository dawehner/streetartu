import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    return <header>
      <h1>Streetart and other images</h1>
      <Link to={'/about'}>About us</Link>
    </header>
  }
}

module.exports = Header;
