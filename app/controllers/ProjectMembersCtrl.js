'use strict';

pdmsys.controller('ProjectMembersController',
  function ProjectMembersController($scope, $stateParams, userFactory, projectFactory) {

    $scope.userFoundStatus = undefined;
    $scope.userFoundMessage = undefined;
    $scope.projectId = $stateParams.projectId;
    $scope.test = {};

    $scope.members = {
      members: [{}],
      selected: {}
    };

    $scope.foundUser = {};

    $scope.getMembers = function() {
      projectFactory.getProjectMembers($scope.projectId)
      .then(function (response) {
        $scope.members.members = response.data;
      } , function() {

      });
    };

    $scope.$watch('member.email', function (value) {
      if(value !== undefined && value.length >= 10) {
        userFactory.getUserByEmail({"email":$scope.member.email})
        .then(function(response) {
          $scope.foundUser = response.data[0];
          $scope.userFoundMessage= 'User found.';
          $scope.userFoundStatus = true;
        }, function() {
          $scope.userFoundMessage= 'User not found.';
          $scope.userFoundStatus = false;
        });
      }
    });

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

    $scope.removeMember = function (idx, member) {
      projectFactory.removeProjectMember($scope.projectId, {"email": member.email})
      .then(function() {
        $scope.members.members.splice( idx, 1 );
      }, function() {

      });
    };

    $scope.reset = function() {
      $scope.members.selected = {};
    };

    $scope.addMember = function(member) {
      var newmember = {
        firstname: $scope.foundUser.firstname,
        lastname: $scope.foundUser.lastname,
        email: member.email,
        type: member.type,
        id: 0
      };
      if (newmember.type == undefined || newmember.type == '')
        newmember.type = 0;
      projectFactory.addMemberToProject($scope.projectId, newmember)
      .then(function(response) {
        $scope.userFoundMessage = 'User added.';
        newmember.id = response.data[0].id;
        $scope.members.members.push(newmember);
        angular.copy({}, member);
        $scope.userFoundStatus = false;
      }, function() {
        $scope.userFoundMessage = 'User not added.';
      });
    };
  });
