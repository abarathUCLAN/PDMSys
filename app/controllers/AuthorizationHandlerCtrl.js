'use strict';

pdmsys.controller('AuthorizationHandlerController',
  function AuthorizationHandlerController($scope, $stateParams, authorizationFactory, projectFactory, $state) {

    $scope.projectId = undefined;

    $scope.isAdmin = false;

    $scope.projectName = undefined;

    $scope.logout = function() {
      authorizationFactory.logout();
    };

    $scope.isAdmin = function() {
      return authorizationFactory.ROLE_ADMIN($stateParams.projectId);
    };

    $scope.getProjectName = function() {
      $scope.projectId = $stateParams.projectId;
      projectFactory.getProjectName($scope.projectId)
      .then(function(response) {
        $scope.projectName = response.data.name;
      }, function() {
          $state.go('home');
      });
    };
});
