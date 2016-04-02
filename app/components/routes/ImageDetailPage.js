import React from 'react';
import Header from '../Header.js';
import images from '../../data/images.js';
import { connect } from 'react-redux'

const ImageDetailPage = ({images, params}) => {
  var imageId = params.imageId;
  var image = images.filter((item) => {
    return item.id == imageId;
  })[0];

  return <div><Header />
    <h2>Details</h2>
    <h3>Uri</h3>
    <code>{image.uri}</code>
    <h3>Image ID</h3>
    <code>{image.id}</code>
    <h3>Info</h3>
    <code>{image.info}</code>
  </div>
}

ImageDetailPage.PropTypes = {
  images: React.PropTypes.object.IsRequired
}

const ImageDetailPageWrapper = connect(function (state) {
  return {
    images: state.images
  };
})(ImageDetailPage);

module.exports = ImageDetailPageWrapper;
