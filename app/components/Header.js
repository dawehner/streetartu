import React from 'react';
import Navigation from './Navigation.js';

class Header extends React.Component {
  render() {
    return <header>
      <h1>Streetart and other images</h1>
      <Navigation />
    </header>
  }
}

module.exports = Header;
