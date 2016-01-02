import React from 'react';

import { Router, Route, DefaultRoute } from 'react-router';

import Root from './Root.js';
import Index from './Index.js';

var Routes = {
  <Route handler={Root} path='/'>
    <DefaultRoute handler={index} />
  </Route>
};
