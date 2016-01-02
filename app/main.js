import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, browserHistory } from 'react-router';
import Root from './Root.js';

import ImageList from './components/ImageList.js';
import Header from './components/Header.js';

class StreetartTuApp extends React.Component {
  render() {
    return <div><Header /><ImageList images={this.props.images} /></div>
  }
}

var images = [
  'IMG_20151219_160257.jpg',
  'IMG_20151224_081702.jpg',
  'IMG_20151224_081736.jpg',
  'IMG_20151219_160303.jpg',
  'IMG_20151224_081712.jpg',
  'IMG_20151224_082023.jpg'
];

var tuApp = <StreetartTuApp images={images} />
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={tuApp} />
  </Router>
, document.getElementById('streetartu'));
