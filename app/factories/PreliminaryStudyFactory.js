'use strict';

angular.module('pdmsys')
    .factory('preliminaryStudyFactory', ['$http', function($http) {

    var urlBase = 'http://localhost:8000/api/preliminaryStudy';
    var dataFactory = {};

    dataFactory.insertProjectDescription = function (projectId, projectDescription) {
        return $http.post(urlBase + '/projectDescription/' + projectId, projectDescription);
    };

    dataFactory.deleteProjectDescription = function (projectId) {
        return $http.post(urlBase + '/projectDescription/delete/' + projectId);
    };

    dataFactory.getProjectDescription = function (projectId) {
        return $http.get(urlBase + '/projectDescription/' + projectId);
    };



    dataFactory.insertRisk = function (projectId, risk) {
        return $http.post(urlBase + '/risk/' + projectId, risk);
    };

    dataFactory.deleteRisk = function (projectId, riskId) {
        return $http.post(urlBase + '/risk/delete/' + projectId + '/' + riskId);
    };

    dataFactory.getRisks = function (projectId) {
        return $http.get(urlBase + '/risk/' + projectId);
    };

    dataFactory.insertEffortEstimation = function (projectId, estimation) {
        return $http.post(urlBase + '/effortEstimation/' + projectId, estimation);
    };

    dataFactory.deleteEffortEstimation = function (projectId) {
        return $http.post(urlBase + '/effortEstimation/delete/' + projectId);
    };

    dataFactory.getEffortEstimation = function (projectId) {
        return $http.get(urlBase + '/effortEstimation/' + projectId);
    };



    dataFactory.insertPSP = function (projectId, psp) {
        return $http.post(urlBase + '/psp/' + projectId, psp);
    };

    dataFactory.updatePSP = function (projectId, psp) {
        return $http.put(urlBase + '/psp/' + projectId, psp);
    };

    dataFactory.deletePSP = function (projectId) {
        return $http.delete(urlBase + '/psp/' + projectId);
    };

    dataFactory.getPSP = function (projectId) {
        return $http.get(urlBase + '/psp/' + projectId);
    };

    return dataFactory;
}]);
