'use strict';

pdmsys.controller('ProjectInvitationsCtrl',
  function ProjectInvitationsCtrl($scope, invitationFactory, $stateParams) {

    $scope.projectId = $stateParams.projectId;

    $scope.invitations = {
      invitations: {},
      selected: {}
    };

    $scope.invitationMessage = undefined;

    $scope.getTemplate = function(invitation) {
      if (invitation.id === $scope.invitations.selected.id) return 'views/editInvitationTmp.html';
      else return 'views/displayInvitationTmp.html';
    };

    $scope.editInvitation = function(invitation) {
      $scope.invitations.selected = angular.copy(invitation);
    };

    $scope.saveInvitation = function(idx) {
      $scope.invitations.invitations[idx] = angular.copy($scope.invitations.selected);
      $scope.reset();
    };

    $scope.removeInvitation = function (idx, invitation) {
      invitationFactory.deleteProjectInvitation($scope.projectId, {"email": invitation.email})
      .then(function() {
              $scope.invitations.invitations.splice( idx, 1 );
      }, function() {

      });
    };

    $scope.reset = function() {
      $scope.invitations.selected = {};
    };

    $scope.addInvitation = function(invitation) {
      var newinvitation = {
        firstname: invitation.firstname,
        lastname: invitation.lastname,
        email: invitation.email,
        type: invitation.type,
        id: 0
      };
      if (newinvitation.type == undefined || newinvitation.type == '')
        newinvitation.type = 0;
      invitationFactory.addInvitationToProject($scope.projectId, newinvitation)
      .then(function(response) {
        newinvitation.id = response.data.id;
        $scope.invitations.invitations.push(newinvitation);
        angular.copy({}, invitation);
      }, function() {
      });
    };

    $scope.getProjectInvitations = function () {
      invitationFactory.getProjectInvitations($scope.projectId)
      .then(function (response) {
        $scope.invitations.invitations = response.data;
      } , function() {

      });
    };

    $scope.changeOpenedViewTab = function() {
      $scope.$emit('projectInvitationData', $scope.invitations.invitations);
    };

    $scope.oneViewTabBack = function() {
      $scope.$emit('oneViewTabBack', undefined);
    };
  });
