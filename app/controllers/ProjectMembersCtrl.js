'use strict';

pdmsys.controller('ProjectMembersController',
  function ProjectMembersController($scope, $stateParams, authorizationFactory, $sessionStorage) {

    $scope.userFoundStatus = undefined;

    $scope.members = {
      members: [{
        id: 1,
        firstname: 'Alexander',
        lastname: 'Barath',
        email: 'barath1058@gmail.com',
        type: '2'
      }, {
        id: 2,
        firstname: 'Stefanie',
        lastname: 'Gwiasda',
        email: 'sg@gmail.com',
        type: '1'
      }, {
        id: 3,
        firstname: 'Stefan',
        lastname: 'Isakovic',
        email: 'isak@gmail.com',
        type: '0'
      }],
      selected: {}
    };

    $scope.getTemplate = function(member) {
      if (member.id === $scope.members.selected.id) return 'views/editmemberTmp.html';
      else return 'views/displaymemberTmp.admin.html';
    };

    $scope.editMember = function(member) {
      $scope.members.selected = angular.copy(member);
    };

    $scope.saveMember = function(idx) {
      $scope.members.members[idx] = angular.copy($scope.members.selected);
      $scope.reset();
    };

    $scope.removeMember = function (idx) {
      $scope.members.members.splice( idx, 1 );
    };

    $scope.reset = function() {
      $scope.members.selected = {};
    };

    $scope.addMember = function(member) {
      var newmember = {
        firstname: member.firstname,
        lastname: member.lastname,
        email: member.email,
        type: member.type,
        id: $scope.members.members.length
      };
      if (newmember.type == undefined || newmember.type == '')
        newmember.type = 0;
      $scope.members.members.push(newmember);
      angular.copy({}, member);
    };
  });
