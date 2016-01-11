'use strict';

angular.module('pdmsys')
    .factory('preliminaryStudyFactory', ['$http', function($http) {

    var urlBase = 'http://localhost:8000/api/preliminaryStudy';
    var dataFactory = {};

    dataFactory.insertProjectDescription = function (projectId, projectDescription) {
        return $http.post(urlBase + '/projectDescription/' + projectId, projectDescription);
    };

    dataFactory.updateProjectDescription = function (projectId, projectDescription) {
        return $http.put(urlBase + '/projectDescription/' + projectId, projectDescription);
    };

    dataFactory.deleteProjectDescription = function (projectId, projectDescription) {
        return $http.delete(urlBase + '/projectDescription/' + projectId, projectDescription);
    };

    dataFactory.getProjectDescription = function (projectId) {
        return $http.get(urlBase + '/projectDescription/' + projectId);
    };



    dataFactory.insertRisk = function (projectId, risk) {
        return $http.post(urlBase + '/risk/' + projectId, risk);
    };

    dataFactory.updateRisk = function (projectId, riskId, risk) {
        return $http.put(urlBase + '/risk/' + projectId + '/' + riskId , risk);
    };

    dataFactory.deleteRisk = function (projectId, riskId) {
        return $http.delete(urlBase + '/risk/' + projectId + '/' + riskId);
    };

    dataFactory.getRisks = function (projectId) {
        return $http.get(urlBase + '/risk/' + projectId);
    };



    dataFactory.insertMilestone = function (projectId, milestone) {
        return $http.post(urlBase + '/milestone', milestone );
    };

    dataFactory.updateMilestone = function (projectId, milestone) {
        return $http.put(urlBase + '/milestone/' + projectId, milestone);
    };

    dataFactory.deleteMilestone = function (projectId) {
        return $http.delete(urlBase + '/milestone/' + projectId);
    };

    dataFactory.getMilestone = function (projectId) {
        return $http.get(urlBase + '/milestone/' + projectId);
    };



    dataFactory.insertEffortEstimation = function (projectId, estimation) {
        return $http.post(urlBase + '/effortEstimation/' + projectId, estimation);
    };

    dataFactory.updateEffortEstimation = function (projectId, estimation) {
        return $http.put(urlBase + '/effortEstimation/' + projectId, estimation);
    };

    dataFactory.deleteEffortEstimation = function (projectId) {
        return $http.delete(urlBase + '/effortEstimation/' + projectId);
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
}]);
