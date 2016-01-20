'use strict';

angular.module('pdmsys')
  .factory('userFactory', ['$http', function($http) {

    var urlBase = 'http://localhost:8000/api/users';
    var dataFactory = {};

    dataFactory.loginUser = function(user) {
      return $http.post(urlBase, $.param(user), {
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
      return $http.get(urlBase);
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
