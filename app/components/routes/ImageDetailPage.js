import React from 'react';
import Header from '../Header.js';

class ImageDetailPage extends React.Component {
  render() {
    var imageId = this.props.params.imageId;
    console.log(imageId);

    return <div><Header />
      <h2>Details</h2>
    </div>
  }
}

module.exports = ImageDetailPage;

