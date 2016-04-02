var login = function() {
  return {
    type: 'LOGIN',
  }
};

var logout = function() {
  return {
    type: 'LOGOUT',
  }
};

var addImage = function(id, uri, info) {
  return {
    type: 'ADD_IMAGE',
    image: {
      id: id,
      uri: uri,
      info: info
    }
  }
};

var addImages = function (images) {
  return {
    type: 'ADD_IMAGES',
    images: images
  }
}

module.exports = {
  setLogin: login,
  setLogout: logout,
  addImage: addImage,
  addImages: addImages,
};

