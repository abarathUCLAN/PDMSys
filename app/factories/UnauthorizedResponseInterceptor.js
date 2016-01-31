'use strict';

angular.module('pdmsys')
  .factory('UnauthorizedResponseInterceptor', ['$q', '$injector', function($q, $injector) {
    return {
      responseError: function(rejection, $sessionStorage) {
        if (rejection.status === 401) {
          $injector.get('$auth').logout();
          $injector.get('$state').go("start.loginAndRegister");
        }
        return $q.reject(rejection);
      }
    }
  }]);
