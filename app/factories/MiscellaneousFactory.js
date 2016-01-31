'use strict';

angular.module('pdmsys')
    .factory('miscellaneousFactory', ['$http', 'Upload', '$window', function($http, Upload, $window) {

    var urlBase = 'http://localhost:8000/api/miscellaneous';
    var dataFactory = {};

    dataFactory.insertPresentation = function (projectId, presentation ) {
        return Upload.upload({
            url: urlBase + '/presentation/' + projectId,
            data: presentation
        });
    };

    dataFactory.getPresentation = function (projectId) {
        return $http.get(urlBase + '/presentation/' + projectId);
    };

    dataFactory.deletePresentation = function (projectId, presentationId) {
        return $http.post(urlBase + '/presentation/delete/' + projectId + '/' + presentationId);
    };

    dataFactory.downloadPresentation = function (presentationId) {
        return $http.get(urlBase + '/presentation/download/' + presentationId)
        .then(function() {
          $window.open(urlBase + '/presentation/download/' + presentationId, '_blank', '');
          //$window.open(urlBase + '/presentation/download/' + presentationId);
        }, function() {
        });
    };


    dataFactory.insertChangeRequest = function (projectId, ChangeRequest) {
        return $http.post(urlBase + '/changeRequest/' + projectId, ChangeRequest);
    };

    dataFactory.deleteChangeRequest = function (projectId, ChangeRequestId) {
        return $http.post(urlBase + '/changeRequest/delete/' + projectId + '/' + ChangeRequestId);
    };

    dataFactory.getChangeRequest = function (projectId) {
        return $http.get(urlBase + '/changeRequest/' + projectId);
    };



    dataFactory.insertStyleGuide = function (projectId, styleGuide) {
        return $http.post(urlBase + '/styleGuide/' + projectId, styleGuide);
    };

    dataFactory.deleteStyleGuide = function (projectId, styleGuideId) {
        return $http.post(urlBase + '/styleGuide/delete/' + projectId + '/' + styleGuideId);
    };

    dataFactory.getStyleGuide = function (projectId) {
        return $http.get(urlBase + '/styleGuide/' + projectId);
    };



    dataFactory.insertReport = function (projectId, Report) {
        return $http.post(urlBase + '/report/' + projectId, Report);
    };

    dataFactory.deleteReport = function (projectId, ReportId) {
        return $http.post(urlBase + '/report/delete/' + projectId + '/' + ReportId);
    };

    dataFactory.getReport = function (projectId) {
        return $http.get(urlBase + '/report/' + projectId);
    };


    return dataFactory;
}]);
