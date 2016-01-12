'use strict';

pdmsys.controller('NavbarHomeCtrl',
  function NavbarHomeCtrl($scope, $stateParams, authorizationFactory) {

    $scope.projectId = $stateParams.projectId;
    $scope.projectName = "TestProjectName";
});
