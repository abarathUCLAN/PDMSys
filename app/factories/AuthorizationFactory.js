'use strict';

angular.module('pdmsys')
  .factory('authorizationFactory', ['$http', '$sessionStorage', '$auth', 'projectFactory', 'userFactory', '$state',
    function($http, $sessionStorage, $auth, projectFactory, userFactory, $state) {
      return {
        ROLE_ADMIN: function(projectId) {
          if ($sessionStorage.get(projectId) === undefined) {
            /**projectFactory.getProjectRights(projectId)
              .then(function(response) {
                $sessionStorage.get(projectId)
                $sessionStorage.put(projectId, response.id);
                return true;
              }, function() {
                return false;
              });**/
          } else {
            if ($sessionStorage.get(projectId) == 2)
              return true;
            else
              return false;
          }
        },
        logout: function() {
          if ($auth.isAuthenticated()) {
            userFactory.logoutUser().then(function() {
              $auth.logout();
              $state.go("start.loginAndRegister");
            }, function() {
              $state.go("start.loginAndRegister");
            });
          }
          $state.go("start.loginAndRegister");
        }
      };
    }
  ]);
