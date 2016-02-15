'use strict';

pdmsys.controller('ProjectInvitationsCtrl',
  function ProjectInvitationsCtrl($scope, invitationFactory, $stateParams) {

    $scope.projectId = $stateParams.projectId;
    $scope.nameRegEx = /^[a-z ,.'-]+$/i;

    $scope.invitations = {
      invitations: [],
      selected: {}
    };
    $scope.form = {};

    $scope.invitationMessage = undefined;

    $scope.getTemplate = function(invitation) {
      if ($scope.projectId !== undefined && $scope.projectId > 0)
        return 'views/templates/displayInvitationHomeTmp.html';
      if (invitation.id === $scope.invitations.selected.id) return 'views/templates/editInvitationTmp.html';
      else return 'views/templates/displayInvitationTmp.html';
    };

    $scope.editInvitation = function(invitation) {
      $scope.invitations.selected = angular.copy(invitation);
    };

    $scope.saveInvitation = function(idx) {
      $scope.invitations.invitations[idx] = angular.copy($scope.invitations.selected);
      $scope.reset();
    };

    $scope.removeInvitation = function(idx, invitation) {
      invitationFactory.deleteProjectInvitation($scope.projectId, {
          "email": invitation.email
        })
        .then(function() {
          $scope.invitations.invitations.splice(idx, 1);
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
      $scope.invitations.invitations.push(newinvitation);
    };

    $scope.addInvitationHome = function(invitation) {
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
          $scope.form.form.$setUntouched();
        }, function() {
          $scope.invitationMessage = "An error occured during the process.";
        });
    };

    $scope.getProjectInvitations = function() {
      invitationFactory.getProjectInvitations($scope.projectId)
        .then(function(response) {
          $scope.invitations.invitations = response.data;
        }, function() {

        });
    };

    $scope.changeOpenedViewTab = function() {
      $scope.$emit('projectInvitationData', $scope.invitations.invitations);
    };

    $scope.oneViewTabBack = function() {
      $scope.$emit('oneViewTabBack', undefined);
    };
  });
