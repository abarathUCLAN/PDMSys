'use strict';

pdmsys.controller('RegisterCtrl',
  function RegisterCtrl($scope) {
    $scope.passwordRegEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,15}/;
    $scope.nameRegEx = /^[a-z ,.'-]+$/i;
  });
