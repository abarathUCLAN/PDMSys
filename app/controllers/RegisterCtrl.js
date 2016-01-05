'use strict';

pdmsys.controller('RegisterCtrl',
  function RegisterCtrl($scope, userFactory) {
    $scope.passwordRegEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,15}/;
    $scope.nameRegEx = /^[a-z ,.'-]+$/i;

    $scope.registerStatus = '';

    $scope.registration = {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    };

    $scope.registrationClass = function () {
      if($scope.registerStatus === 'Registration failed.')
        return 'errorMessage';
      else
        return 'registerMessage';
    };

    $scope.registerUser = function () {
      userFactory.insertUser($scope.registration)
      .then(function () {
          $scope.registerStatus = 'Registration successful.';
      },function (error) {
          $scope.registerStatus = 'Registration failed.';
      })};

  });
