import React from 'react';

import { Link } from 'react-router';

class ImageList extends React.Component {
  render() {
    var images = this.props.images.map(function (image) {
      var image_url = "images/" + image.filename;
      return <Link to={`/image/${image.id}`}><img width="800px" src={image_url} /></Link>
    });
    return <div className="image-list">
      {images}
    </div>;
  }
}

module.exports = ImageList;
