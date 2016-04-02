import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
// import Root from './Root.js';

import ImageList from './components/ImageList.js';
import Header from './components/Header.js';
import ImageDetailPage from './components/routes/ImageDetailPage.js';
import AboutUs from './components/routes/AboutUs.js';
import Login from './components/routes/Login.js';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import App from './App.js';

import { createStore } from 'redux';
import { Provider } from 'react-redux'

import images from './data/images.js';

const history = createBrowserHistory();

var initialState = {
  loggedIn: false
};
function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {
        loggedIn: true
      });
    case 'LOGOUT':
      return Object.assign({}, state, {
        loggedIn: false
      });
    default:
      return state;
  }
}

let store = createStore(appReducer);
store.subscribe(function() {
  console.log(store.getState());
});

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
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={StreetartTuAppWrapper} />
        <Route path="/image/:imageId" component={ImageDetailPage} />
        <Route path="/about" component={AboutUs} />
        <Route path="/login" component={Login} />
      </Route>
    </Router>
  </Provider>
), document.body)

