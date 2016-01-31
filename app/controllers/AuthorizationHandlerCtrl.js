'use strict';

pdmsys.controller('AuthorizationHandlerController',
  function AuthorizationHandlerController($scope, $rootScope, $stateParams, authorizationFactory, projectFactory, $sessionStorage, $state) {

    $scope.projectId = 0;

    $scope.isAdmin = false;
    $scope.isSpectator = false;

    $scope.projectName = undefined;

    $scope.$watch('projectId', function() {
      if ($scope.projectId != 0) {
        projectFactory.getProjectRights($scope.projectId)
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
    });

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
          $scope.projectId = $stateParams.projectId;
        };
      });
  });
