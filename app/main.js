import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
// import Root from './Root.js';

import ImageList from './components/ImageList.js';
import Header from './components/Header.js';
import ImageDetailPage from './components/routes/ImageDetailPage.js';
import AboutUs from './components/routes/AboutUs.js';
import Login from './components/routes/Login.js';
import Logout from './components/routes/Logout.js';
import AddImage from './components/routes/AddImage.js';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import App from './App.js';

import { addImages } from './actions';

import { createStore } from 'redux';
import { Provider, connect } from 'react-redux'

const history = createBrowserHistory();

const initialState = (() => {
  return {
    loggedIn: false,
    images: [],
  };
})();

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
    case 'ADD_IMAGE':
      return Object.assign({}, state, {
        images: [...state.images, action.image]
      });

    case 'ADD_IMAGES':
      return Object.assign({}, state, {
        images: state.images.concat(action.images)
      });

    default:
      return state;
  }
}

let store = createStore(appReducer);
store.subscribe(function() {
  console.log(store.getState());
});

fetch('http://localhost:3000/entries', {
  method: 'GET',
  mode: 'cors',
}).then(function (response) {
  return response.json();
}).then(function(result) {
  store.dispatch(addImages(result));
});

const StreetartTuApp = ({ images }) => (
  <div>
    <Header />
    <ImageList images={images} />
  </div>
)

const StreetartTuAppWrapper = connect((state) => (
  {
    images: state.images
  }
))(StreetartTuApp);

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={StreetartTuAppWrapper} />
        <Route path="/image/:imageId" component={ImageDetailPage} />
        <Route path="/about" component={AboutUs} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/images/add" component={AddImage} />
      </Route>
    </Router>
  </Provider>
), document.body)

