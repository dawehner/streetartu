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

var addImage = function(uri, info) {
  return {
    type: 'ADD_IMAGE',
    image: {
      uri: uri,
      info: info
    }
  }
};

module.exports = {
  setLogin: login,
  setLogout: logout,
  addImage: addImage,
};

