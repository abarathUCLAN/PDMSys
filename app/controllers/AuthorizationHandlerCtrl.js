'use strict';

pdmsys.controller('AuthorizationHandlerController',
  function AuthorizationHandlerController($scope, $stateParams, authorizationFactory) {

    $scope.projectId = $stateParams.projectId;

    $scope.isAdmin = false;

    $scope.logout = function() {
      authorizationFactory.logout();
    };

    $scope.isAdmin = function() {
      return authorizationFactory.ROLE_ADMIN($stateParams.projectId);
    };
});
