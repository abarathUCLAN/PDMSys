'use strict';

angular.module('pdmsys')
    .factory('functionalSpecificationFactory', ['$http', function($http) {

    var urlBase = 'http://localhost:8000/api/functionalSpecification';
    var dataFactory = {};


    dataFactory.insertFunctionalRequirement = function (projectId, requirement) {
        return $http.post(urlBase + '/functionalRequirement/' + projectId, requirement);
    };

    dataFactory.deleteFunctionalRequirement  = function (projectId, requirementId) {
        return $http.post(urlBase + '/functionalRequirement/delete/' + projectId + '/' + requirementId);
    };

    dataFactory.getFunctionalRequirement  = function (projectId) {
        return $http.get(urlBase + '/functionalRequirement/' + projectId);
    };



    dataFactory.insertProjectImplementation = function (projectId, implementation) {
        return $http.post(urlBase + '/projectImplementation/' + projectId, implementation );
    };

    dataFactory.deleteProjectImplementation = function (projectId) {
        return $http.post(urlBase + '/projectImplementation/delete/' + projectId);
    };

    dataFactory.getProjectImplementation = function (projectId) {
        return $http.get(urlBase + '/projectImplementation/' + projectId);
    };

    return dataFactory;
}]);
