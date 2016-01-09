angular.module('pdmsys')
    .factory('invitationFactory', ['$http', function($http) {

    var urlBase = 'http://localhost:8000/api/invitations';
    var dataFactory = {};

    dataFactory.insertInvitation = function (invitations, projectId) {
        return $http.post(urlBase + '/' + projectId, invitations);
    };

    return dataFactory;
}]);
