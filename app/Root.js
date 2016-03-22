import React from 'react';

import Router from 'react-router';

var RouteHandler = Router.RouteHandler;

class Root extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          {React.cloneElement(this.props.children, ...this.props)}
        </body>
      </html>
    )
  }
}

module.exports = Root;
