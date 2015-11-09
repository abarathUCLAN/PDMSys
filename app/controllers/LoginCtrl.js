'use strict';

pdmsys.controller('LoginCtrl',
  function LoginCtrl($scope){
    $scope.usernameRegEx = /^[a-zA-Z0-9_-]{5,15}/; //a-z,
    $scope.passwordRegEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,15}/;
  });
