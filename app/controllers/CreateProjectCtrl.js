'use strict';

pdmsys.controller('CreateProjectCtrl',
  function CreateProjectCtrl($scope) {
    $scope.openedViewTab = 1;

    $scope.projectInformation = {};

    $scope.projectInvitations = {};

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

  });
