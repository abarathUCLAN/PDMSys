'use strict';

pdmsys.controller('CreateProjectCtrl',
  function CreateProjectCtrl($scope, projectFactory, invitationFactory, $state) {
    $scope.openedViewTab = 1;
    $scope.projectInformation = {};
    $scope.projectInvitations = undefined;
    $scope.projectCreated = false;
    $scope.projectHomeButton = false;
    $scope.projectId = undefined;

    $scope.viewsTabViewFnc = function(value) {
      if (value == this.openedViewTab)
        return true;
      return false;
    }

    $scope.$on('projectInformationData', function(event, data) {
      $scope.projectInformation = data;
      $scope.openedViewTab++;
    });

    $scope.$on('projectInvitationData', function(event, data) {
      $scope.projectInvitations = data;
      $scope.openedViewTab++;
    });

    $scope.$on('oneViewTabBack', function(event, data) {
      $scope.openedViewTab--;
    });

    $scope.createProject = function () {
      projectFactory.insertProject($scope.projectInformation)
      .then(function (response) {
        $scope.projectId = response.data;
          if($scope.projectInvitations.length != 0) {
            $scope.projectCreated = true;
            $scope.projectHomeButton = true;
            $scope.createInvitations(response.data);
          } else {
            $scope.projectHome();
          }
      }, function (error) {
          $scope.createProjectStatus = "Project couldn't be created.";
      })
    };

    $scope.createInvitations = function(projectId) {
      invitationFactory.insertInvitation(projectId, $scope.projectInvitations)
      .then(function (response) {
         $scope.projectHome();
      }, function (error) {
          $scope.projectInvitations = error.data;
          $scope.createProjectStatus = "Project and PDMSys-invitations created except the already registered/invited users above.";
      })
    };

    $scope.projectHome = function() {
      $state.go('projectHome.dashboard', {projectId: $scope.projectId});
    };

  });
