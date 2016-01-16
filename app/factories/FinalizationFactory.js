'use strict';

angular.module('pdmsys')
    .factory('finalizationFactory', ['$http', function($http, finalizationFactory) {

    var urlBase = 'http://localhost:8000/api/finalization';
    var dataFactory = {};


    dataFactory.insertProtocol = function (projectId, protocol) {
        return $http.post(urlBase + '/protocol/' + projectId, protocol);
    };

    dataFactory.deleteProtocol  = function (projectId, protocolId) {
        return $http.post(urlBase + '/protocol/delete/' + projectId + '/' + protocolId);
    };

    dataFactory.getProtocol  = function (projectId) {
        return $http.get(urlBase + '/protocol/' + projectId);
    };



    dataFactory.insertProjectManual = function (projectId, manual) {
        return $http.post(urlBase + '/projectManual/' + projectId, manual );
    };

    dataFactory.deleteProjectManual = function (projectId) {
        return $http.post(urlBase + '/projectManual/delete/' + projectId);
    };

    dataFactory.getProjectManual = function (projectId) {
        return $http.get(urlBase + '/projectManual/' + projectId);
    };

    return dataFactory;
}]);
