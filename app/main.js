import Button from 'react-bootstrap/lib/Button';
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, browserHistory } from 'react-router';

class Header extends React.Component {
  render() {
    return <header></header>
  }
}

class ImageList extends React.Component {
  render() {
    var images = this.props.images.map(function (image) {
      var image_url = "images/" + image;
      return <img width="800px" src={image_url} />
    });
    return <div className="image-list">
      {images}
    </div>;
  }
}

class ImageDetailPage = React.createClass({
  render() {
    return <h2>Details</h2>
  }
});

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

ReactDOM.render(<StreetartTuApp images={images}/>, document.getElementById('streetartu'));
