import React from 'react';

class ImageList extends React.Component {
  render() {
    var images = this.props.images.map(function (image) {
      var image_url = "images/" + image;
      return <img width="800px" src={image_url} />
    });
    return <div className="image-list">
      {images}
    </div>;
  }
}

