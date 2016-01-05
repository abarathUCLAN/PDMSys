'use strict';

pdmsys.controller('NavbarHomeCtrl',
  function NavbarHomeCtrl($scope, $stateParams, $state, $auth, userFactory) {

    $scope.projectId = $stateParams.projectId;
    $scope.projectName = "TestProjectName";

    $scope.logout = function() {
      if($auth.isAuthenticated()) {
        userFactory.logoutUser().then(function() {
           $auth.logout();
           $state.go("start.loginAndRegister");
        }, function() {
           $state.go("start.loginAndRegister");
        });
      }
      $state.go("start.loginAndRegister");
    };
});
