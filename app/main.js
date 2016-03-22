import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
// import Root from './Root.js';

import ImageList from './components/ImageList.js';
import Header from './components/Header.js';
import ImageDetailPage from './components/routes/ImageDetailPage.js';
import AboutUs from './components/routes/AboutUs.js';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import App from './App.js';

const history = createBrowserHistory();

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
    </div>
  }

}



ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={StreetartTuAppWrapper} />
      <Route path="/image/:imageId" component={ImageDetailPage} />
      <Route path="/about" component={AboutUs} />
    </Route>
  </Router>
), document.body)

//ReactDOM.render(React.createElement(StreetartTuAppWrapper), document.body);

