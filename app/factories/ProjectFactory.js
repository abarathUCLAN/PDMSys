angular.module('pdmsys')
    .factory('projectFactory', ['$http', function($http) {

    var urlBase = 'http://localhost:8000/api/projects';
    var dataFactory = {};

    dataFactory.getProjects = function () {
        return $http.get(urlBase);
    };

    dataFactory.insertProject = function (project) {
        return $http.post(urlBase, project);
    };

    return dataFactory;
}]);
