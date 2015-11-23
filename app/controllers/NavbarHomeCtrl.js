'use strict';

pdmsys.controller('NavbarHomeCtrl',
  function NavbarHomeCtrl($scope, $stateParams) {

    $scope.projectId = $stateParams.projectId;

  });
