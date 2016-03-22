import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, browserHistory } from 'react-router';
// import Root from './Root.js';

import ImageList from './components/ImageList.js';
import Header from './components/Header.js';
import ImageDetailPage from './components/ImageDetailPage.js';
import AboutUs from './AboutUs.js';

var images = [
  {filename: 'IMG_20151219_160257.jpg', id: 1},
  {filename: 'IMG_20151224_081702.jpg', id: 2},
  {filename: 'IMG_20151224_081736.jpg', id: 3},
  {filename: 'IMG_20151219_160303.jpg', id: 4},
  {filename: 'IMG_20151224_081712.jpg', id: 5},
  {filename: 'IMG_20151224_082023.jpg', id: 6}
];

class StreetartTuAppWrapper extends React.Component {
  render() {
    return <StreetartTuApp images={images} />
  }
}

class StreetartTuApp extends React.Component {

  render() {
    return <div>
      <Header />
      <ImageList images={this.props.images} />
      <div>{this.props.children}</div>
    </div>
  }

}



ReactDOM.render((
  <Router>
    <Route path="/" component={StreetartTuAppWrapper}>
      <Route path="/image/:imageId" component={ImageDetailPage} />
      <Route path="/about" component={AboutUs} />
    </Route>
  </Router>
), document.body)

//ReactDOM.render(React.createElement(StreetartTuAppWrapper), document.body);

