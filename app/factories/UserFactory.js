'use strict';

angular.module('pdmsys')
  .factory('userFactory', ['$http','md5', function($http, md5) {

    var urlBase = 'http://localhost:8000/api/users';
    var dataFactory = {};

    dataFactory.loginUser = function(user) {
      var newUserWithHashedPassword = {
        username: user.username,
        password: md5.createHash(user.password),
        grant_type: 'password',
        client_id: 'f3d259ddd3ed8ff3843839b',
        client_secret: '4c7f6f8fa93d59c45502c0ae8c4a95b'
      };
      return $http.post(urlBase, $.param(newUserWithHashedPassword), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      });
    };

    dataFactory.getUserByEmail = function(email) {
      return $http.post(urlBase + '/getUserByEmail', email);
    };

    dataFactory.insertUser = function(user) {
      return $http.post(urlBase + '/register', user);
    };

    dataFactory.updateUser = function(user) {
      return $http.post(urlBase + '/changeData', user)
    };

    dataFactory.getUserData = function() {
      return $http.get(urlBase + '/changeData');
    };

    dataFactory.logoutUser = function() {
      return $http.post(urlBase + '/logout');
    };

    dataFactory.checkIfUrlCodeIsValid = function(urlcode) {
      return $http.post(urlBase + '/checkIfUrlCodeIsValid', urlcode);
    };

    dataFactory.registerUserWithUrlCode = function(user) {
      return $http.post(urlBase + '/registerUserWithUrlCode', user);
    };

    return dataFactory;
  }]);
