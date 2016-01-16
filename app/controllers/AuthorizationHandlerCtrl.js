'use strict';

pdmsys.controller('AuthorizationHandlerController',
  function AuthorizationHandlerController($scope, $rootScope, $stateParams, authorizationFactory, projectFactory, $sessionStorage, $state) {

    $scope.projectId = undefined;

    $scope.isAdmin = false;
    $scope.isSpectator = false;

    $scope.projectName = undefined;

    $scope.logout = function() {
      $scope.isAdmin = false;
      $scope.isSpectator = false;
      authorizationFactory.logout();
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

    $rootScope.$on('$stateChangeSuccess',
      function(event, toState, toParams, fromState, fromParams) {
        if (toState.data.project === undefined) {
          var projectId = $stateParams.projectId;
          projectFactory.getProjectRights(projectId)
            .then(function(response) {
              if (response.data == 2) {
                $scope.isAdmin = true;
              } else if (response.data == 0) {
                $scope.isSpectator = true;
              }
            }, function() {
              $state.go("home");
            });
        }
        $scope.isAdmin = false;
        $scope.isSpectator = false;
      });

  });
