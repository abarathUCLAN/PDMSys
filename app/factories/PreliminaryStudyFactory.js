angular.module('pdmsys')
    .factory('preliminaryStudyFactory', ['$http', function($http) {

    var urlBase = 'http://localhost:8000/api/users';
    var dataFactory = {};

    dataFactory.insertProjectDescription = function (user) {
        return $http.post(urlBase, user);
    };

    dataFactory.updateProjectDescription = function (user) {
        return $http.post(urlBase, user);
    };

    return dataFactory;
}]);
