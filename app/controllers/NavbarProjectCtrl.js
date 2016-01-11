'use strict';

pdmsys.controller('NavbarProjectController',
  function NavbarHomeCtrl($scope, $state, $auth, userFactory) {

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
