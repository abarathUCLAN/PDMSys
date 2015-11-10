'use strict';

pdmsys.controller('LoginCtrl',
  function LoginCtrl($scope) {
    $scope.passwordRegEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,15}/;


    $scope.test = function() {
      console.log("test");
    }
  });
