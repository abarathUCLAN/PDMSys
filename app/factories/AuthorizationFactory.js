'use strict';

angular.module('pdmsys')
  .factory('authorizationFactory', ['$http', '$sessionStorage', '$auth', 'projectFactory', 'userFactory', '$state',
    function($http, $sessionStorage, $auth, projectFactory, userFactory, $state) {
      return {
        logout: function() {
          if ($auth.isAuthenticated()) {
            userFactory.logoutUser().then(function() {
              $auth.logout();
              $sessionStorage.empty();
              $state.go("start.loginAndRegister");
            }, function() {
              $sessionStorage.empty();
              $state.go("start.loginAndRegister");
            });
          }
          $sessionStorage.empty();
          $state.go("start.loginAndRegister");
        }
      };
    }
  ]);
