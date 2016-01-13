'use strict';

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

    dataFactory.getProjectRights = function (projectId) {
        return $http.get(urlBase + '/rights/' + projectId);
    };

    dataFactory.addMemberToProject = function (projectId, member) {
        return $http.post(urlBase + '/addMemberToProject/' + projectId, member);
    };

    dataFactory.getProjectMembers = function (projectId) {
        return $http.get(urlBase + '/getProjectMembers/' + projectId);
    };

    dataFactory.removeProjectMember = function (projectId, email) {
        return $http.post(urlBase + '/removeProjectMember/' + projectId, email);
    };

    return dataFactory;
}]);
