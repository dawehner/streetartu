import React from 'react';

class Index extends React.Component {
  render() {
    return <main>
      <div>{this.props.children}</div>
    </main>
  }
}

module.exports = Index;
