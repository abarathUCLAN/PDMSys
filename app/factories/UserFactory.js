'use strict';

angular.module('pdmsys')
    .factory('userFactory', ['$http', function($http) {

    var urlBase = 'http://localhost:8000/api/users';
    var dataFactory = {};

    dataFactory.loginUser = function (user) {
        return $http.post(urlBase, user);
    };

    dataFactory.getUsers = function () {
        return $http.get(urlBase);
    };

    dataFactory.getUserByEmail = function (email) {
        return $http.post(urlBase + '/getUserByEmail', email);
    };

    dataFactory.insertUser = function (user) {
        return $http.post(urlBase + '/register', user);
    };

    dataFactory.updateUser = function (user) {
        return $http.post(urlBase + '/changeData', user)
    };

    dataFactory.logoutUser = function () {
        return $http.post(urlBase + '/logout');
    };

    return dataFactory;
}]);
