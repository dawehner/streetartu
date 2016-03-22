import React from 'react';
import Header from '../Header.js';
import images from '../../data/images.js';

class ImageDetailPage extends React.Component {
  render() {
    var imageId = this.props.params.imageId;
    var image = images[imageId];

    return <div><Header />
      <h2>Details</h2>
      <h3>Filename</h3>
      <code>{image.filename}</code>
      <h3>Image ID</h3>
      <code>{image.id}</code>
    </div>
  }
}

module.exports = ImageDetailPage;

