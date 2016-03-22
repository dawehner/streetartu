import React from 'react';

class App extends React.Component {
  render() {
    return <main>
      <div>{this.props.children}</div>
    </main>
  }
}

module.exports = App;
