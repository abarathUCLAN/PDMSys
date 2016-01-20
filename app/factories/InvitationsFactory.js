'use strict';

angular.module('pdmsys')
    .factory('invitationFactory', ['$http', function($http) {

    var urlBase = 'http://localhost:8000/api/invitations';
    var dataFactory = {};

    dataFactory.insertInvitation = function (projectId, invitation) {
        return $http.post(urlBase + '/createInvitation/' + projectId, invitation);
    };

    dataFactory.getProjectInvitations = function (projectId) {
        return $http.get(urlBase + '/' + projectId);
    };

    dataFactory.addInvitationToProject = function (projectId, invitation) {
        return $http.post(urlBase + '/addInvitationToProject/' + projectId, invitation);
    };

    dataFactory.deleteProjectInvitation = function (projectId, invitationId) {
        return $http.post(urlBase + '/deleteInvitation/' + projectId, invitationId);
    };



    return dataFactory;
}]);
