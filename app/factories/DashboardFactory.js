'use strict';

angular.module('pdmsys')
    .factory('dashboardFactory', ['$http', function($http) {

    var urlBase = 'http://localhost:8000/api/dashboard';
    var dataFactory = {};


    dataFactory.findUserByEmail = function (projectId, email) {
        return $http.post(urlBase + '/functionalRequirement/' + projectId, requirement);
    };

    dataFactory.updateFunctionalRequirement  = function (projectId, requirementId, requirement) {
        return $http.put(urlBase + '/functionalRequirement/' + projectId + '/' + requirementId , requirement);
    };

    dataFactory.deleteFunctionalRequirement  = function (projectId, riskId) {
        return $http.delete(urlBase + '/functionalRequirementisk/' + requirementId + '/' + riskId);
    };

    dataFactory.getFunctionalRequirements  = function (projectId) {
        return $http.get(urlBase + '/functionalRequirement/' + projectId);
    };



    dataFactory.insertProjectImplementation = function (projectId, implementation) {
        return $http.post(urlBase + '/projectImplementation', implementation );
    };

    dataFactory.updateProjectImplementation = function (projectId, implementation) {
        return $http.put(urlBase + '/projectImplementation/' + projectId, implementation);
    };

    dataFactory.deleteProjectImplementation = function (projectId) {
        return $http.delete(urlBase + '/projectImplementation/' + projectId);
    };

    dataFactory.getProjectImplementation = function (projectId) {
        return $http.get(urlBase + '/projectImplementation/' + projectId);
    };
}]);
