'use strict';

pdmsys.controller('ConfirmInformationCtrl',
  function ConfirmInformationCtrl($scope) {
    $scope.oneViewTabBack = function() {
      $scope.$emit('oneViewTabBack', undefined);
    };
  });
