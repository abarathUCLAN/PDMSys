'use strict';

pdmsys.controller('ProjectInvitationsCtrl',
  function ProjectInvitationsCtrl($scope) {

    $scope.invitations = {
      invitations: [{
        id: 1,
        name: 'Alexander Barath',
        email: 'barath1058@gmail.com',
        type: '2'
      }, {
        id: 2,
        name: 'Stefanie Gwiasda',
        email: 'sg@gmail.com',
        type: '1'
      }, {
        id: 3,
        name: 'Stefan Isakovic',
        email: 'isak@gmail.com',
        type: '0'
      }],
      selected: {}
    };

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

    $scope.removeInvitation = function (idx) {
      $scope.invitations.invitations.splice( idx, 1 );
    };

    $scope.reset = function() {
      $scope.invitations.selected = {};
    };

    $scope.addInvitation = function(invitation) {
      var newInvitation = {
        name: invitation.name,
        email: invitation.email,
        type: invitation.type,
        id: $scope.invitations.invitations.length
      };
      if (newInvitation.type == undefined || newInvitation.type == '')
        newInvitation.type = 0;
      $scope.invitations.invitations.push(newInvitation);
      angular.copy({}, invitation);
    };

    $scope.changeOpenedViewTab = function() {
      $scope.$emit('projectInvitationData', $scope.invitations.invitations);
    };

    $scope.oneViewTabBack = function() {
      $scope.$emit('oneViewTabBack', undefined);
    };
  });
